import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="g-nav">
        <Link to="/grainder/songs" className="g-nav__item">
          Songs
        </Link>
        <Link to="/grainder/appcard" className="g-nav__item">
          AppCard
        </Link>
        <Link to="/grainder/pics" className="g-nav__item">
          Pics
        </Link>
        <Link to="/grainder/season" className="g-nav__item">
          SeasonDisplay
        </Link>
        <Link to="/grainder/blog" className="g-nav__item">
          Blog
        </Link>
      </div>
    );
  }
}

export default Header;
