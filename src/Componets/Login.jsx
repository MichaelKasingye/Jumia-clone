import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Style/Login.css";
import { auth } from "../FireBase/Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  function register(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={login} className="login_signButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Jumia's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Jumia Account
        </button>
      </div>
    </div>
  );
}

export default Login;
