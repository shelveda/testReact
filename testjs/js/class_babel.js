'use strict';

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== 'undefined' &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// const root = document.querySelector('#root');
// const root2 = document.querySelector('#root2');

var IlyaMenuGetSet = function IlyaMenuGetSet() {
  var _this = this;

  _classCallCheck(this, IlyaMenuGetSet);

  _defineProperty(this, 'data', {});

  _defineProperty(this, 'root', {});

  _defineProperty(this, 'output', {});

  _defineProperty(this, 'headerText', []);

  _defineProperty(this, 'baseURL', '');

  _defineProperty(this, 'setData', function(data) {
    _this.data = data;
  });

  _defineProperty(this, 'getData', function() {
    return _this.data;
  });

  _defineProperty(this, 'setRoot', function(root) {
    _this.root = document.querySelector(root);
  });

  _defineProperty(this, 'getRoot', function() {
    return _this.root;
  });

  _defineProperty(this, 'setOutput', function(out) {
    _this.output = out;
  });

  _defineProperty(this, 'getOutput', function() {
    return _this.output;
  });

  _defineProperty(this, 'getHeaderText', function() {
    return _this.headerText;
  });
};

var parseItems =
  /*#__PURE__*/
  (function(_IlyaMenuGetSet) {
    _inherits(parseItems, _IlyaMenuGetSet);

    function parseItems(name, root, data) {
      var _this2;

      var init_id =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, parseItems);

      _this2 = _possibleConstructorReturn(
        this,
        _getPrototypeOf(parseItems).call(this)
      );

      _defineProperty(
        _assertThisInitialized(_this2),
        'pushHeaderText',
        function(input) {
          _this2.headerText.push(input);
        }
      );

      _defineProperty(
        _assertThisInitialized(_this2),
        'popHeaderText',
        function() {
          _this2.headerText.pop();
        }
      );

      _defineProperty(
        _assertThisInitialized(_this2),
        'showHeaderText',
        function() {
          var l = _this2.headerText.length;
          var head = _this2.root.children[0];

          if (l == 1 || l == 2) {
            head.textContent = _this2.headerText[l - 1];
          } else if (l == 3) {
            head.textContent =
              _this2.headerText[1] + ' >> ' + _this2.headerText[2];
          } else {
            head.textContent =
              _this2.headerText[1] + ' >> ... >> ' + _this2.headerText[l - 1];
          }
        }
      );

      _defineProperty(_assertThisInitialized(_this2), 'initHeader', function(
        id
      ) {
        if (id == null) {
          return _this2.showHeaderText();
        }

        var item = input.filter(function(item) {
          return item.id == id;
        })[0];

        _this2.headerText.unshift(item.title);

        _this2.initHeader(item.parent_id);
      });

      _defineProperty(_assertThisInitialized(_this2), 'setDataAJAX', function(
        baseURL
      ) {
        _this2.setData = baseURL;
      });

      _defineProperty(_assertThisInitialized(_this2), 'renderOutput', function(
        id
      ) {
        var base = {
          ..._this2.data.filter(function(item) {
            return item.id == id;
          })[0]
        };
        base.id = base.id + _this2.name;

        var dataChildren = _this2.data
          .filter(function(item) {
            return item.parent_id == id;
          })
          .map(function(child) {
            return { ...child };
          });

        var children = dataChildren.map(function(a) {
          return { ...a };
        });
        children.map(function(child) {
          return (child.id = child.id + _this2.name);
        });
        var parent = {};
        var out = {};

        if (base.parent_id) {
          parent = {
            ..._this2.data.filter(function(item) {
              return item.id == base.parent_id;
            })[0]
          };
          parent.id = parent.id + _this2.name;
          out = {
            base: base,
            parent: parent,
            children: children
          };
          return out;
        }

        out = {
          base: base,
          parent: null,
          children: children
        };
        return out;
      });

      _defineProperty(_assertThisInitialized(_this2), 'liAndACreator', function(
        parent,
        className,
        text,
        id,
        icon,
        event
      ) {
        var li = document.createElement('li');
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
        li.addEventListener('click', function() {
          _this2.handleMenuClick(li, event);
        });
        parent.appendChild(li);
      });

      _defineProperty(_assertThisInitialized(_this2), 'listMaker', function(
        input
      ) {
        if (_this2.root.children[1]) {
          _this2.root.children[1].remove();
        }

        var base = input.base,
          children = input.children,
          parent = input.parent;
        var ul = document.createElement('ul');
        ul.setAttribute('ilya-show', true);
        var div = document.createElement('div');
        div.className = 'ilya-menu-content';
        div.appendChild(ul);

        _this2.root.appendChild(div);

        if (parent) {
          _this2.liAndACreator(
            ul,
            'ilya-menu-content__back',
            parent.title,
            parent.id,
            'right',
            'back'
          );
        }

        _this2.liAndACreator(
          ul,
          'ilya-menu-content__header',
          base.title,
          base.id,
          null,
          'base'
        );

        children.map(function(child) {
          return _this2.liAndACreator(
            ul,
            'ilya-menu-content__item',
            child.title,
            child.id,
            'left',
            'child'
          );
        });
      });

      _defineProperty(
        _assertThisInitialized(_this2),
        'handleMenuClick',
        function(input, event) {
          var id = input.id[0];

          if (event == 'back') {
            _this2.popHeaderText();

            _this2.showHeaderText();
          }

          if (event == 'child') {
            _this2.pushHeaderText(input.textContent);

            _this2.showHeaderText();
          }

          if (event == 'base') {
            return;
          }

          _this2.listMaker(_this2.renderOutput(id));
        }
      );

      if (data == null) {
        return _possibleConstructorReturn(
          _this2,
          console.log('Plase set Data')
        );
      }

      _this2.setRoot(root);

      _this2.name = name;

      _this2.setData(data);

      var _div = document.createElement('div');

      _div.className = 'ilya-menu-select';

      _this2.root.appendChild(_div);

      _this2.listMaker(_this2.renderOutput(init_id));

      _this2.initHeader(init_id);

      return _this2;
    }

    return parseItems;
  })(IlyaMenuGetSet);

var input = [
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

var menu = new parseItems('saeed', '#root1', input, 1);
var hello = ['saeed', 'davari'];
console.log(hello.slice(0));
console.log(hello.join('>>'));
