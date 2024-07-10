import React from "react";
import "../App.css";
import Button from "./Button";

const Login = ({ gotoLanding, gotoSignup }) => {
  return (
    <div className="container">
      <div className="main">
        <input placeholder="Email" type="text" className="email" />
        <br />
        <br />
        <input placeholder="passsword" type="text" className="pass" />

        <Button name="login" onClick={gotoLanding} />

        <div onClick={gotoSignup}>register</div>
      </div>
    </div>
  );
};

export default Login;
