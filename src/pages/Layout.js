import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Add Outlet for nested routes
import './layout.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link> {/* Lowercase '/blogs' */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        {/* This is where nested routes will be rendered */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
