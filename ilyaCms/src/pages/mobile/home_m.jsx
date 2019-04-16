import React, { Component } from 'react';

import './css/style_m.css';
import './css/all.min.css';

class HomeM extends Component {
  render() {
    return (
      <div className="main-container" id="main-wrapper">
        <section className="header">Header</section>

        <section className="main">Main</section>

        <section className="top-footer">top-footer</section>

        <footer className="footer">footer</footer>
      </div>
    );
  }
}

export default HomeM;
