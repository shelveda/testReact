import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

class Pics extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID d3122693c0bf45893aaa6a06d9fd6cf999080ec494ca4020cfed58cd23c18959'
      }
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui container" style={{ fontSize: '16px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
        </div>
      </React.Fragment>
    );
  }
}

export default Pics;
