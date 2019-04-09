import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommnetDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';

import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommnetDetail
          author="sam"
          text="hello"
          date="6pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommnetDetail
          author="saeed"
          text="hello kdarif"
          date="6pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommnetDetail
          author="max"
          text="hellosdfsdfs"
          date="6pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

class App2 extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>loading!</div>;
  }
}

class App3 extends React.Component {
  render() {
    const name = 'saeed';

    return (
      <div className="App">
        <Header branding="Contact manager" />
        <Contact
          name="saeed davari"
          email="shelveda.com"
          phone="555-555-55555"
        />
        <Contact name="sheloo" email="saeed2.com" phone="dddf55-55555" />
        <Contact name="sheloo" email="saeed2.com" phone="dddf55-55555" />
        <Contact name="sheloo" email="saeed2.com" phone="dddf55-55555" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<App2 />, document.querySelector('#root2'));
ReactDOM.render(<App3 />, document.querySelector('#root3'));
