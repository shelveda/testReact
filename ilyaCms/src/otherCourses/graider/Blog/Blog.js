import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './blog.css';

import reducers from './reducers';
import PostList from './components/PostList';

class Blog extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <React.Fragment>
          <div className="ui contariner blogbox">
            <h1>Blog</h1>
            <PostList />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default Blog;
