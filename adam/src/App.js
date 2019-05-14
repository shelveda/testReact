import React, { Component } from 'react';

import './App.css';
import Menu from './Menu';

// import _ from 'lodash';

const DEFAULT_QUERY = 'react';
const DEFAULT_HPP = '5';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

const isSearched = searchTerm => {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

class App extends Component {
  state = {
    results: null,
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    searchTermInside: ''
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }
  setSearchTopStories = result => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;
    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const updatedHits = [...oldHits, ...hits];

    this.setState({
      results: { ...results, [searchKey]: { hits: updatedHits, page } }
    });
  };

  onSearchSubmit = event => {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
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

  onSearchInside = event => {
    this.setState({ searchTermInside: event.target.value });
  };

  hide = () => {
    return document.querySelector('#adam').classList.toggle('unvisible');
  };

  testJS = () => {
    const res = {
      redux: { hits: [{ name: 'saeed' }, { name: 'saeed2' }], page: 2 }
    };

    const name = 'react';
    const hits2 = [{ name: 'mykel' }, { name: 'me2' }];

    const restfull = { ...res, [name]: { hits2 } };
    console.log(restfull);
  };

  render() {
    const { searchTerm, results, searchKey, searchTermInside } = this.state;

    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;

    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    if (!results) {
      return (
        <div>
          <button onClick={this.testJS}>testJS </button>
          <Menu />
        </div>
      );
    }
    return (
      <div className="page">
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
            <Search value={searchTermInside} onChange={this.onSearchInside} />
          </div>

          <Table
            list={list}
            onDismiss={this.onDismiss}
            pattern={searchTermInside}
          />

          <div className="interactions">
            <Button
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
            >
              More
            </Button>
          </div>
        </div>
        <button onClick={this.testJS}>run me </button>
        <Menu />
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
    const { list, onDismiss, pattern } = this.props;
    return (
      <div className="table">
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID} className="table-row">
            <span style={{ width: '50%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '20%' }}> {item.author} </span>
            <span style={{ width: '10%' }}> {item.num_comments} </span>
            <span style={{ width: '10%' }}> {item.points} </span>
            <span style={{ width: '10%' }}>
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
