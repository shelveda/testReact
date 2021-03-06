import React, { Component } from 'react';
import Spinner from './components/Spinner';

const seasonConfig = {
  summer: {
    text: 'let see beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Winter is here',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};
const Display = ({ season }) => {
  const { text, iconName } = seasonConfig[season];
  return (
    <div style={{ fontSize: '16px' }}>
      <i className={`massive ${iconName} icon`} />
      <h3>{text}</h3>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

class SeasonDisplay extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return (
        <div>
          <Display season={getSeason({ lat }, 1)} />
        </div>
      );
    }

    return <Spinner />;
  }

  render() {
    return <div style={{ fontSize: '16px' }}>{this.renderContent()}</div>;
  }
}

export default SeasonDisplay;
