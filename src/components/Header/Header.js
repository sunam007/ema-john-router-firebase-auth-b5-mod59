import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/order">Order Review</NavLink>
        <NavLink to="/inventory">Manage inventory</NavLink>
        {user ? (
          <button onClick={handleLogOut}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
