import React, { Component } from 'react';

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

const isSearched = searchTerm => {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

class Menu extends Component {
  state = {
    input,
    show: [],
    searchTitle: ''
  };

  handleClick = name => {
    const input = [...this.state.input].filter(item => item.id !== 1);

    console.log(input);
    this.setState({ input });
  };

  reloadStates = () => {
    this.setState({ input: input });
  };
  showStates = () => {
    console.log(this.state);
  };

  changeMenu = id => {
    console.log(id);
  };
  onSearchChange = event => {
    this.setState({ searchTitle: event.target.value });
  };

  onDismiss = id => {
    const input = this.state.input.filter(item => item.id !== id);
    this.setState({ input });
  };

  render() {
    const { input, searchTitle } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.reloadStates('me');
          }}
        >
          Reload
        </button>
        <br />

        <button
          onClick={() => {
            this.showStates();
          }}
        >
          state
        </button>
        <ul>
          <SearchBar value={searchTitle} onChange={this.onSearchChange}>
            جستجو
          </SearchBar>
          <Content
            input={input}
            onClick={this.changeMenu}
            pattern={searchTitle}
            onDismiss={this.onDismiss}
          />
        </ul>
      </div>
    );
  }
}

const SearchBar = ({ value, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);

class Content extends Component {
  render() {
    const { input, pattern, onClick, onDismiss } = this.props;
    return (
      <div>
        {input.filter(isSearched(pattern)).map(item => {
          return (
            <li key={item.id} onClick={() => onClick(item.id)}>
              {item.title}
              <Button onClick={() => onDismiss(item.id)}>حذف</Button>
            </li>
          );
        })}
      </div>
    );
  }
}

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default Menu;
