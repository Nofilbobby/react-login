import React from "react";

const Landing = ({ gotoLogin }) => {
  return (
    <div>
        <h1> Welcome to the chat app</h1>
      Landing<p onClick={gotoLogin}>logout</p>
    </div>
  );
};

export default Landing;
