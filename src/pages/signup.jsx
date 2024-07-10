import React from "react";
import "../App.css";
import Button from "./Button";
const SignUp = ({ gotoLogin, gotoLanding }) => {
  return (
    <div className="container">
      <div className="main">
        <input placeholder="Fristname" type="text" className="email" />
        <br />

        <input placeholder="Lastname" type="text" className="pass" />
        <br />

        <input placeholder="Email" type="text" className="pass" />
        <br />

        <input placeholder="passsword" type="text" className="pass" />

        <Button name="Singup" onClick={gotoLanding} />

        <div onClick={gotoLogin}>already have an account?</div>
      </div>
    </div>
  );
};

export default SignUp;
