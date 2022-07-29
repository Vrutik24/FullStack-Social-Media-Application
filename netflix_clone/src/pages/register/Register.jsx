import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const handleMembership = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <h1 className="logo">NETFLIX</h1>
          <button className="signIn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV Shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleMembership}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
