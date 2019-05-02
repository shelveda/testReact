// const root = document.querySelector('#root');
// const root2 = document.querySelector('#root2');

let input = [
  {
    id: 1,
    title: 'همه',
    parent_id: null,
    count_child: 3
  },
  {
    id: 2,
    title: 'op1',
    parent_id: 1,
    count_child: 0
  },
  {
    id: 3,
    title: 'op2',
    parent_id: 1,
    count_child: 0
  },
  {
    id: 4,
    title: 'op3',
    parent_id: 1,
    count_child: 2
  },
  {
    id: 5,
    title: 'child1',
    parent_id: 4,
    count_child: 0
  },
  {
    id: 6,
    title: 'child2',
    parent_id: 4,
    count_child: 0
  }
];

class IlyaMenuGetSet {
  data = {};
  root = {};
  output = {};

  baseURL = '';
  setData = data => {
    this.data = data;
  };
  getData = () => {
    return this.data;
  };

  getRoot = root => {
    this.root = root;
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
}

class parseItems extends IlyaMenuGetSet {
  constructor(root, name) {
    super();
    this.root = document.querySelector(root);
    this.name = name;
  }

  setDataAJAX = baseURL => {
    this.setData = baseURL;
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

  liAndACreator = (parent, className, text, id, icon) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.className = className;
    li.id = id;
    a.textContent = text;
    if (icon == 'right') {
      li.innerHTML = '<i class="fal fa-caret-right icon-right"></i>';
    }
    if (icon == 'left') {
      li.innerHTML = '<i class="fal fa-caret-left icon-left"></i>';
    }
    li.setAttribute('role', 'option');
    li.appendChild(a);
    li.addEventListener('click', () => {
      this.handleMenuClick(li);
    });
    parent.appendChild(li);
  };

  listMaker = input => {
    if (this.root.children[0]) {
      this.root.children[0].remove();
    }
    const { base, children, parent } = input;

    let ul = document.createElement('ul');
    this.root.appendChild(ul);

    if (parent) {
      this.liAndACreator(
        ul,
        'ilya-menu__back',
        parent.title,
        parent.id,
        'right'
      );
    }

    this.liAndACreator(ul, 'ilya-menu__header', base.title, base.id);

    children.map(child =>
      this.liAndACreator(ul, 'ilya-menu__item', child.title, child.id, 'left')
    );
  };
  handleMenuClick = input => {
    const id = input.id[0];
    this.listMaker(this.renderOutput(id));
  };
}

menu1 = new parseItems('#root1', 'saeed');
menu1.setData(input);
menu1.listMaker(menu1.renderOutput(1));

//   });
// });

// allInfo.addEventListener('click', onClick);
