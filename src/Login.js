import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.msg));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
