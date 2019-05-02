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
  constructor(root) {
    super();
    this.root = document.querySelector(root);
    this.name = '#root';
  }

  setDataAJAX = baseURL => {
    this.setData = baseURL;
  };

  renderOutput = id => {
    let base = this.data.filter(item => item.id == id)[0];
    base.id = base.id + this.name;
    let children = this.data.filter(item => item.parent_id == id);
    children.map(child => (child.id = child.id + this.name));

    let parent = {};
    let out = {};

    if (base.parent_id) {
      parent = this.data.filter(item => item.id == base.parent_id)[0];
      parent.id = parent.id + this.name;
      out = { base, parent, children };
      return out;
    }

    out = { base, parent: null, children };

    console.log(out);

    return out;
  };

  liAndACreator = (parent, className, text, id, icon) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.className = className;
    a.id = id;
    a.textContent = text;
    if (icon == 'right') {
      li.innerHTML = '<i class="fal fa-caret-right icon-right"></i>';
    }
    if (icon == 'left') {
      li.innerHTML = '<i class="fal fa-caret-left icon-left"></i>';
    }
    li.appendChild(a);
    parent.appendChild(li);
  };

  listMaker = input => {
    const { base, children, parent } = input;

    let ul = document.createElement('ul');
    this.root.appendChild(ul);

    if (parent) {
      this.liAndACreator(ul, 'ilya-menu__back', parent.title, parent.id);
    }

    this.liAndACreator(ul, 'ilya-menu__header', base.title, base.id);

    children.map(child =>
      this.liAndACreator(ul, 'ilya-menu__item', child.title, child.id, 'left')
    );
  };
}

hello = new parseItems('#root4');

hello.setData(input);
hello.listMaker(hello.renderOutput(4));

let sss = 'saeed';
ss = sss.slice(1);
