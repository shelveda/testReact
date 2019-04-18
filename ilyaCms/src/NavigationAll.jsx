import React, { Component } from 'react';

class NavigationAll extends Component {
  render() {
    return (
      <div className="allnav-base">
        <div className="allnav-item">
          <h6> Laptops</h6>
          <ul>
            <li>
              <a href="/cms">Home</a>
            </li>
          </ul>
        </div>
        <div className="allnav-item">
          <h6> Tablets</h6>
          <ul>
            <li>
              <a href="/cms/t">Home_t</a>
            </li>
          </ul>
        </div>
        <div className="allnav-item">
          <h6> Mobile</h6>
          <ul>
            <li>
              <a href="/cms/m">Home_m</a>
            </li>
          </ul>
        </div>
        <div className="allnav-item">
          <h6> Courses</h6>
          <ul>
            <li>
              <a href="/grainder">Grainder</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationAll;
