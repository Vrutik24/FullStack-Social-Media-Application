import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <h1 className="logo">NETFLIX</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email address" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to netflix? <b>Sign Up now</b>
          </span>
          <small>
            This page is protected by google reCAPTCH to ensure that you are not
            bot. <b>learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
