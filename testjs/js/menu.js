let input = [
  {
    id: 1,
    title: 'همه',
    parent_id: null,
    count_child: 3
  },
  {
    id: 2,
    title: 'املاک',
    parent_id: 1,
    count_child: 0
  },
  {
    id: 3,
    title: 'وسایل نقلیه',
    parent_id: 1,
    count_child: 0
  },
  {
    id: 4,
    title: 'لوازم الکترونیکی',
    parent_id: 1,
    count_child: 2
  },
  {
    id: 5,
    title: 'رایانه',
    parent_id: 4,
    count_child: 0
  },
  {
    id: 6,
    title: 'کنسول',
    parent_id: 4,
    count_child: 2
  },
  {
    id: 7,
    title: 'ps4',
    parent_id: 6,
    count_child: 0
  },
  {
    id: 8,
    title: 'xbox',
    parent_id: 6,
    count_child: 0
  }
];

class IlyaMenuGetSet {
  data = {};
  root = {};
  output = {};
  headerText = [];

  baseURL = '';

  setData = data => {
    this.data = data;
  };
  getData = () => {
    return this.data;
  };

  setRoot = root => {
    this.root = document.querySelector(root);
  };
  getRoot = () => {
    return this.root;
  };

  setOutput = out => {
    this.output = out;
  };

  getOutput = () => {
    return this.output;
  };

  getHeaderText = () => {
    return this.headerText;
  };
}

class SideMenu extends IlyaMenuGetSet {
  constructor(name, root, data, APILink = null, init_id = 1) {
    super();

    this.setRoot(root);
    this.name = name;

    if (data == null) {
      async function getAjax(link) {
        let response = await fetch(link);
        let data = await response.json();
        return data;
      }
      getAjax(APILink)
        .then(data => {
          this.setData(data);
        })
        .then(() => this.initMenu(init_id));
    } else {
      this.setData(data);
      this.initMenu(init_id);
    }
  }
  id = '';

  initMenu = init_id => {
    let div = document.createElement('div');
    div.className = 'ilya-menu-select';
    this.root.appendChild(div);
    this.listMaker(this.renderOutput(init_id));
    this.initHeader(init_id);
  };

  pushHeaderText = input => {
    this.headerText.push(input);
  };

  popHeaderText = () => {
    this.headerText.pop();
  };

  showHeaderText = () => {
    const l = this.headerText.length;
    const head = this.root.children[0];

    if (l == 1 || l == 2) {
      head.textContent = this.headerText[l - 1];
    } else if (l == 3) {
      head.textContent = this.headerText[1] + ' >> ' + this.headerText[2];
    } else {
      head.textContent =
        this.headerText[1] + ' >> ... >> ' + this.headerText[l - 1];
    }
  };

  initHeader = id => {
    if (id == null) {
      return this.showHeaderText();
    }
    const item = this.data.filter(item => item.id == id)[0];
    this.headerText.unshift(item.title);
    this.initHeader(item.parent_id);
  };

  renderOutput = id => {
    let base = { ...this.data.filter(item => item.id == id)[0] };
    base.id = base.id + this.name;

    const dataChildren = this.data
      .filter(item => item.parent_id == id)
      .map(child => ({ ...child }));
    const children = dataChildren.map(a => ({ ...a }));
    children.map(child => (child.id = child.id + this.name));

    let parent = {};
    let out = {};

    if (base.parent_id) {
      parent = { ...this.data.filter(item => item.id == base.parent_id)[0] };
      parent.id = parent.id + this.name;
      out = { base, parent, children };
      return out;
    }

    out = { base, parent: null, children };
    return out;
  };

  liAndACreator = (parent, className, text, id, icon, event) => {
    let li = document.createElement('li');
    li.className = className;
    li.id = id;
    if (icon == 'right') {
      li.innerHTML = '<i class="fal fa-caret-right icon-right"></i>';
    }
    if (icon == 'left') {
      li.innerHTML = '<i class="fal fa-caret-left icon-left"></i>';
    }
    li.innerHTML += text;
    li.setAttribute('role', 'option');
    li.addEventListener('click', () => {
      this.handleMenuClick(li, event);
    });
    parent.appendChild(li);
  };

  listMaker = input => {
    if (this.root.children[1]) {
      this.root.children[1].remove();
    }
    const { base, children, parent } = input;

    let ul = document.createElement('ul');
    ul.setAttribute('ilya-show', true);

    let div = document.createElement('div');
    div.className = 'ilya-menu-content';
    div.appendChild(ul);
    this.root.appendChild(div);

    if (parent) {
      this.liAndACreator(
        ul,
        'ilya-menu-content__back',
        parent.title,
        parent.id,
        'right',
        'back'
      );
    }

    this.liAndACreator(
      ul,
      'ilya-menu-content__header',
      base.title,
      base.id,
      null,
      'base'
    );

    children.map(child =>
      this.liAndACreator(
        ul,
        'ilya-menu-content__item',
        child.title,
        child.id,
        'left',
        'child'
      )
    );
  };

  callbacks = [];

  handleMenuClick = (input, event) => {
    this.id = input.id;
    this.onChange();
    const id = input.id[0];
    if (event == 'back') {
      this.popHeaderText();
      this.showHeaderText();
    }
    if (event == 'child') {
      this.pushHeaderText(input.textContent);
      this.showHeaderText();
    }
    if (event == 'base') {
      return;
    }
    this.listMaker(this.renderOutput(id));
  };
  setCallbacks(call) {
    this.callbacks = call;
  }
  getId = () => {
    return this.id;
  };

  onChange = () => {
    // console.log(this.callbacks);
    this.callbacks.map(item => {
      console.log(item.type);
      item.func();
    });
  };
}

url = `https://ilyaidea.ir/api/input`;

menu = new SideMenu('saeed', '#root1', null, url, 1);

menu.setCallbacks([
  {
    type: 'click',
    func: function() {
      const id = menu.getId();
      menu.setData(input);
      document.querySelector('#root2').textContent = `${id[0]}`;
    }
  },
  {
    type: 'mouse',
    func: function() {
      const id = menu.getId();
      console.log(`heres ${id[0]}`);
    }
  }
]);

// function saeed() {
//   const id = menu.getId();
//   menu.setData(input);
//   document.querySelector('#root2').textContent = `${id[0]}`;
// }
