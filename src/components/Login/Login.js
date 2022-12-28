import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordOnBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    nevigate("/shop");
  }
  const handleUserLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-control">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserLogin}>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input
              onBlur={handleEmailOnBlur}
              type="email"
              name="Enter Email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordOnBlur}
              type="password"
              name="Enter Password"
              id=""
              required
            />
          </div>
          <p>{error?.message}</p>
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
