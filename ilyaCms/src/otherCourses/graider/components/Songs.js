import React, { Component } from 'react';
import SongList from './songLis';
import SongDetail from './songDetail';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import songsReducers from '../reducers/songsReducers';

class Songs extends Component {
  render() {
    return (
      <Provider store={createStore(songsReducers)}>
        <React.Fragment>
          <h1> hllo i</h1>
          <br />
          <div className="ui container grid">
            <div className="ui row">
              <div className="column eight wide">
                <SongList />
              </div>
              <div className="column eight wide">
                <SongDetail />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default Songs;
