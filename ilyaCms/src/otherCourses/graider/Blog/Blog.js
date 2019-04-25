import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './blog.css';

import reducers from './reducers';
import PostList from './components/PostList';

const store = createStore(reducers, applyMiddleware(thunk));

class Blog extends Component {
  render() {
    return (
      <Provider store={store}>
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
