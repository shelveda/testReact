import React, { Component } from 'react';
import './Menu.css';
// import _ from 'lodash';

const isSearched = searchTerm => {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

class Menu extends Component {
  state = {
    result: [],
    input: [],
    show: [],
    searchTitle: ''
  };

  componentDidMount() {
    fetch(`https://ilyaidea.ir/api/input`)
      .then(response => response.json())
      .then(result => this.setDataAjax(result))
      .catch(error => error);
  }

  ReloadInputNoAjax = () => {
    const input = [...this.state.result];
    this.setState({ input });
  };

  setDataAjax = result => {
    this.setState({ result });
    this.setState({ input: result });
  };

  handleClick = name => {
    const input = [...this.state.input].filter(item => item.id !== 1);

    console.log(input);
    this.setState({ input });
  };

  reloadStates = () => {
    this.ReloadInputNoAjax();
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
      <div className="ilya-menu">
        <SearchBar value={searchTitle} onChange={this.onSearchChange}>
          جستجو
        </SearchBar>
        <Content
          input={input}
          onClick={this.changeMenu}
          pattern={searchTitle}
          onDismiss={this.onDismiss}
        />
        <button
          className="test-button"
          onClick={() => {
            this.reloadStates('me');
          }}
        >
          Reload
        </button>
        <br />

        <button
          className="test-button"
          onClick={() => {
            this.showStates();
          }}
        >
          state
        </button>
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
      <ul className="ilya-menu__content">
        {input.filter(isSearched(pattern)).map(item => {
          return (
            <li key={item.id} onClick={() => onClick(item.id)}>
              {item.title}
              <Button onClick={() => onDismiss(item.id)}>حذف</Button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default Menu;
