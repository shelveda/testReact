import React, { Component } from 'react';

const getSeason = ({ lat, month }) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};
const Display = ({ lat }) => {
  return <div>Latitude:{lat}</div>;
};

class SeasonDisplay extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div style={{ fontSize: '16px' }}>Error: {errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return <Display lat={lat} />;
    }

    return <div>Loading!</div>;
  }
}

export default SeasonDisplay;
