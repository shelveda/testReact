import React, { Component } from 'react';

import './App.css';
import Menu from './Menu';

// import _ from 'lodash';

const DEFAULT_QUERY = 'react';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

// const isSearched = searchTerm => {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   };
// };

class App extends Component {
  state = {
    backup: null,
    result: null,
    searchTerm: DEFAULT_QUERY
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
    )
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }
  setSearchTopStories = result => {
    this.setState({ result });
    this.setState({ backup: result });
  };

  onSearchSubmit = event => {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  };

  onDismiss = id => {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    const result = { ...this.state.result, hits: updatedHits };
    this.setState({ result });
  };

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  hide = () => {
    return document.querySelector('#adam').classList.toggle('unvisible');
  };

  reloadStates = () => {
    const result = { ...this.state.backup };
    this.setState({ result });
    console.log(this.state.result);
  };

  testJS = () => {
    let arr1 = [];
    arr1 = this.state.result.hits;
    console.log(typeof arr1);
    console.log(arr1);

    const arr2 = [
      { author: 'dwwoelfel', comment_text: null },
      { author: 'peterhunt', comment_text: null }
    ];
    const arr3 = [...arr1, ...arr2];
    // console.log(arr1);
    console.log(arr3);
  };

  render() {
    const { searchTerm, result } = this.state;
    if (!result) {
      return <Menu />;
    }
    return (
      <div className="page">
        <Button onClick={() => this.reloadStates()} className="button-active ">
          reload No Ajax
        </Button>
        <Button onClick={this.hide} className="button-inline">
          show
        </Button>
        <div id="adam" className="page unvisible ">
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            >
              search
            </Search>
          </div>
          <Table list={result.hits} onDismiss={this.onDismiss} />
        </div>
        <Menu />
        <button onClick={this.testJS}>run me </button>
      </div>
    );
  }
}

const Search = ({ value, onChange, children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit">{children}</button>
  </form>
);

class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div className="table">
        {list.map(item => (
          <div key={item.objectID} className="table-row">
            <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '30%' }}> {item.author} </span>
            <span style={{ width: '5%' }}> {item.num_comments} </span>
            <span style={{ width: '5%' }}> {item.points} </span>
            <span style={{ width: '20%' }}>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>
        ))}
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
