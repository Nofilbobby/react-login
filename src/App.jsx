import { useState } from "react";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Landing from "./pages/landing";

function App() {
  const [page, setPage] = useState("login");

  const gotoLogin = () => {
    setPage("login")
  }

  const gotoSignup = () => {
    setPage("signup")
  }

  const gotoLanding = () => {
    setPage("landing")
  }

  return (

    <>
      {page === "login" ? (
        <Login gotoSignup={gotoSignup} gotoLanding={gotoLanding} />
      ) : page === "signup" ? (
        <SignUp gotoLogin={gotoLogin} gotoLanding={gotoLanding} />
      ) : (
        <Landing  gotoLogin={gotoLogin} />
      )}
    </>
  );
}

export default App;
