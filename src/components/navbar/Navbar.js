import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "My Title",
};

export default Navbar;
