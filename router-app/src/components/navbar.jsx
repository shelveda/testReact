import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/customers" className="nav-link">
            Customers
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/rentals" className="nav-link">
            Rental
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
