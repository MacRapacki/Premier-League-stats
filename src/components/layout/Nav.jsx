import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="nav_wrapper">
        <div className="nav_logo">logo</div>
        <ul className="nav_list">
          <NavLink className="nav_item" activeClassName="selected" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav_item" activeClassName="selected" to="/table">
            Table
          </NavLink>
          <NavLink className="nav_item" activeClassName="selected" to="/about">
            Players Stats
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
