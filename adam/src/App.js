import React, { Component } from 'react';

import './App.css';
import Menu from './Menu';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const isSearched = searchTerm => {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

class App extends Component {
  state = { list, searchTerm: '' };

  onDismiss = id => {
    const list = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list });
  };
  stateReload = () => {
    this.setState({ list });
  };
  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.stateReload()} type="button">
          Reload
        </button>
        <Search value={searchTerm} onChange={this.onSearchChange} />
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
        <br />
        <br />
        <Menu />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => (
  <form>
    {children} <input type="text" value={value} onChange={onChange} />{' '}
  </form>
);

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span> <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        ))}{' '}
      </div>
    );
  }
}

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default App;
