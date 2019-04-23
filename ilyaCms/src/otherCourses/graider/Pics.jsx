import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './components/ImageList';

class Pics extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui container" style={{ fontSize: '16px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </React.Fragment>
    );
  }
}

export default Pics;
