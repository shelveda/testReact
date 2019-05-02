// const root = document.querySelector('#root');
// const root2 = document.querySelector('#root2');

class IlyaMenu {
  data = {};
  root = {};
  link = '';

  link1 = 'https://jsonplaceholder.typicode.com/posts';
  link2 = 'https://ilyaidea.ir/api/ad/categories?category=';

  setMenuData = data => {
    this.data = data;
  };
  getMenuData = () => {
    return this.data;
  };

  setMenuRoot = root => {
    this.root = root;
  };
  getMenuRoot = () => {
    return this.root;
  };

  setMenuLink = link => {
    this.link = link;
  };
  getMenuLink = () => {
    return this.link;
  };

  onHeaderClick = () => {};

  onItemClick = () => {};
  onDefaultClick = () => {};

  IlyaMenuListMaker = root => {
    if (root.children[0]) {
      root.children[0].remove();
    }
    const array = this.getMenuData();
    const { parent_id, parent_title, title, id, children, count_child } = array;

    const itemMaker = (parent, id, text, className) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.className = className;
      a.id = id;
      a.setAttribute('onClick', 'saeed.ilyaHandleClick(this)');
      a.textContent = text;
      if (className == 'ilya-menu__back') {
        li.innerHTML = '<i class="fal fa-caret-right icon-right"></i>';
      }
      li.appendChild(a);
      parent.appendChild(li);
    };

    const childrenMaker = (parent, children) => {
      children.map(child => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.className = 'ilya-menu__item';
        a.textContent = child.title;
        a.setAttribute('onClick', 'saeed.ilyaHandleClick(this)');
        a.id = child.id;
        li.innerHTML = '<i class="fal fa-caret-left icon-left"></i>';
        li.appendChild(a);
        parent.appendChild(li);
      });
    };

    let ul = document.createElement('ul');
    this.root.appendChild(ul);

    if (parent_id == null && id != null) {
      itemMaker(ul, parent_id, 'همه دسته بندی ها', 'ilya-menu__back');
    }
    if (parent_id !== null && id !== null) {
      itemMaker(ul, parent_id, parent_title, 'ilya-menu__back');
    }

    if (parent_id == null && id == null) {
      itemMaker(ul, parent_id, 'همه دسته بندی ها', 'ilya-menu__header');
    } else {
      itemMaker(ul, id, title, 'ilya-menu__header');
    }

    childrenMaker(ul, children);
  };

  ilyaHandleClick = e => {
    const id = e.getAttribute('id');
    this.JSONGetter(this.link2, id);
  };

  JSONGetter = (url, id) => {
    const getURL = url + `${id}`;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', getURL);
    ourRequest.onload = () => {
      let data = JSON.parse(ourRequest.responseText);
      this.setMenuData(data);
      this.IlyaMenuListMaker(this.root);
    };
    ourRequest.send();
  };
}

// saeed = new IlyaMenu();
// saeed.setMenuRoot(document.querySelector('#root2'));

// saeed.JSONGetter('https://ilyaidea.ir/api/ad/categories?category=');
// saeed.JSONGetter();
