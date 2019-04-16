import React, { Component } from 'react';

import './css/style.css';
import './css/all.min.css';

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper" id="main-wrapper">
        <section className="header">Header</section>
        <section className="main">Main</section>
        <section className="top-footer">top-footer</section>
        <footer className="footer">footer</footer>
      </div>
    );
  }
}

export default Home;
