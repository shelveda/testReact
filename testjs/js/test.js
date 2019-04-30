const root = document.querySelector('#root');
// const root2 = document.querySelector('#root2');

const DLMENU = root => {
  data = {};

  const setMenuData = datas => {
    data = datas;
  };

  const getMenuData = () => {
    return data;
  };

  const IlyaMenuListMaker = root => {
    if (root.children[0]) {
      root.children[0].remove();
    }
    array = getMenuData();
    const { parent_id, parent_title, title, id, children, count_child } = array;

    const itemMaker = (parent, id, text, className) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.className = className;
      a.id = id;
      a.setAttribute('onClick', 'ilyaHandleClick(this)');
      a.textContent = text;
      li.appendChild(a);
      parent.appendChild(li);
    };

    const childrenMaker = (parent, children) => {
      children.map(child => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.className = 'ilya-menu__item';
        a.textContent = child.title;
        a.setAttribute('onClick', 'ilyaHandleClick(this)');
        a.id = child.id;
        li.appendChild(a);
        parent.appendChild(li);
      });
    };

    let ul = document.createElement('ul');
    root.appendChild(ul);

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

  const link1 = 'https://jsonplaceholder.typicode.com/posts';
  const link2 = 'https://ilyaidea.ir/api/ad/categories?category=';

  ilyaHandleClick = e => {
    id = e.getAttribute('id');
    JSONGetter(link2, id);
  };

  const JSONGetter = (url, id) => {
    getURL = url + `${id}`;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', getURL);
    ourRequest.onload = () => {
      let data = JSON.parse(ourRequest.responseText);
      setMenuData(data);
      IlyaMenuListMaker(root);
    };
    ourRequest.send();
  };

  JSONGetter(link2);
};

DLMENU(root);
