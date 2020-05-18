import React from "react";

const NavBar = ({ totalCounters, totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Categories in Cart{" "}
        <span className="badge badege-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <a href="#" className="navbar-brand">
        Items in Cart{" "}
        <span className="badge badege-pill badge-secondary">{totalItems}</span>
      </a>
    </nav>
  );
};

export default NavBar;
