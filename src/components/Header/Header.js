import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/order">Order Review</NavLink>
        <NavLink to="/inventory">Manage inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
