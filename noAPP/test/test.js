const IlyaMenuData = {
  id: 2,
  parent_id: 1,
  parent_title: 'all',
  title: 'Option1',
  count_child: 3,
  children: [
    {
      parent_title: 'option1',
      parent_id: 2,
      id: 3,
      count_child: 2,

      title: 'child1'
    },
    {
      parent_title: 'option1',
      parent_id: 2,
      id: 4,
      count_child: 3,
      title: 'child2'
    },
    {
      parent_title: 'option1',
      parent_id: 2,
      id: 5,
      title: 'child3'
    }
  ]
};

const IlyaMenuData2 = {
  id: 2,
  parent_id: 1,
  parent_title: 'all2',
  title: 'Option2',
  count_child: 0,
  children: []
};

const root = document.querySelector('#root');

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
      a.setAttribute('onClick', 'handleClick()');
      // a.setAttribute('class');
      li.appendChild(a);
      parent.appendChild(li);
    });
  };

  let ul = document.createElement('ul');
  root.appendChild(ul);

  if (parent_id == null && id != null) {
    itemMaker(ul, parent_id, 'همه دسته بندی ها', 'ilya-menu__back');
  }
  if (parent_id == null && id == null) {
    itemMaker(ul, parent_id, 'همه دسته بندی ها', 'ilya-menu__header');
  } else {
    itemMaker(ul, id, title, 'ilya-menu__header');
  }

  childrenMaker(ul, children);
};

getId = e => {
  id = e.getAttribute('id');
  console.log(id);
  // console.log($(e)[0].id);

  if (id == 1000) {
    console.log('ne1');
    setMenuData(IlyaMenuData);
    IlyaMenuListMaker(root);
  }
  if (id == 2000) {
    console.log('ne2');

    setMenuData(IlyaMenuData2);
    IlyaMenuListMaker(root);
  }
};
const link1 = 'https://jsonplaceholder.typicode.com/posts';
const link2 = 'https://ilyaidea.ir/api/ad/categories?category=';
// https://jsonplaceholder.typicode.com/posts

// IlyaMenuListMaker(root);

const JSONGetter = (url, id) => {
  // url = link2;
  // id = 2;
  getURL = url + `${id}`;

  console.log(getURL);

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', getURL);
  ourRequest.onload = () => {
    let data = JSON.parse(ourRequest.responseText);
    setMenuData(data);
    IlyaMenuListMaker(root);
  };
  ourRequest.send();
};
