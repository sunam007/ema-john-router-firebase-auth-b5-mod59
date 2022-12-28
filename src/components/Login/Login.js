import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-control">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Enter Email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="Enter Password" id="" required />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?{" "}
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>{" "}
        </p>
        <div className="divider">
          <span></span>
          <span>Or</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
