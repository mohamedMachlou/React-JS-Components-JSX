import React, { Component } from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-success">
        <a className="navbar-brand" href="#">
          Contact List
        </a>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            classNameName="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "My  Title",
};

export default Navbar;
