import React, { useContext, useState } from "react";
import "./Login.css";

import Logo from "../../olx-logo.png";

import { FirebaseContext } from "../../context/FirebaseContext";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const { app } = useContext(FirebaseContext);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const hndleOnsubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setLoginError("invalid login");
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <p style={{ color: "red" }}>{loginError}</p>
        <form onSubmit={hndleOnsubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={handleOnchange}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={handleOnchange}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
