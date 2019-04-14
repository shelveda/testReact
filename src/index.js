import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/Movies';
// import faker from 'faker';
// import CommnetDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';
// import SeasonDisplay from './SeasonDisplay';

// import Contacts from './components/Contacts';
// import Header from './components/Header';
import Counters from './components/Counters';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LikeHeart from './components/common/Like';

// const App = () => {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommnetDetail
//           author="sam"
//           text="hello"
//           date="6pm"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommnetDetail
//           author="saeed"
//           text="hello kdarif"
//           date="6pm"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommnetDetail
//           author="max"
//           text="hellosdfsdfs"
//           date="6pm"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

// class App2 extends React.Component {
//   state = { lat: null, errorMessage: '' };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message })
//     );
//   }

//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error : {this.state.errorMessage}</div>;
//     }

//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }

//     return <div>loading!</div>;
//   }
// }

// class App3 extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Header branding="Contact manager" />
//         <Contacts />
//       </div>
//     );
//   }
// }

class App4 extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };

  componentDidMount() {}
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <LikeHeart />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

class App5 extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

// ReactDOM.render(<App />, document.querySelector('#root'));
// ReactDOM.render(<App2 />, document.querySelector('#root2'));
// ReactDOM.render(<App3 />, document.querySelector('#root3'));
ReactDOM.render(<App4 />, document.querySelector('#root4'));
ReactDOM.render(<App5 />, document.querySelector('#root5'));
