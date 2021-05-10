import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../images/premier-league-1.svg";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="nav_wrapper">
        <Link to="/" exact className="nav_logo">
          <img src={Logo} alt="premier league logo" />
        </Link>
        <ul className="nav_list">
          <NavLink className="nav_item" activeClassName="selected" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav_item" activeClassName="selected" to="/table">
            Table
          </NavLink>
          <NavLink
            className="nav_item"
            activeClassName="selected"
            to="/scorers"
          >
            Scorers
          </NavLink>
          <NavLink className="nav_item" activeClassName="selected" to="/teams">
            Teams
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
