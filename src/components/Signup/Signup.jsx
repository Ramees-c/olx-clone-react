import React, { useContext, useState } from "react";
import "./Signup.css";

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../context/FirebaseContext";

import { addDoc, collection } from "firebase/firestore";
import "firebase/firestore";

import { db } from "../../firebase/config";

import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [signupError, setSignupError] = useState()
  const [valueError, setValueError] = useState()

  // const [user, setUser] =useState({})
  var user = "";

  const { app } = useContext(FirebaseContext);

  const auth = getAuth(app);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(value.password > 6) {
      setValueError("password should be at least 6 characters")
    } else {
      createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        user = userCredential.user;
        // setUser(userCredential.user)
        updateProfile(user, {
          displayName: value.username,
        });
      })
      .catch ((err) => {
        setSignupError(err.message)
      })
      .then(() => {
        addDoc(collection(db, "users"), {
          id: user.uid,
          username: value.username,
          phone: value.phone,
        });
      }).then(()=>{
        navigate('/login')
      })
    }
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <p className="signup-error">{signupError==="Firebase: Error (auth/email-already-in-use)." ? "Email address is already exist" : ""}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="username"
            onChange={handleOnchange}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={handleOnchange}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            onChange={handleOnchange}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={handleOnchange}
            defaultValue="Doe"
          />
          
          <br />
          <p style={{color:'red', fontSize:'10px'}}>{valueError}</p>
          <br />
          <button>Signup</button>
        </form>
        <br />
        <a>Login</a>
      </div>
    </div>
  );
}

export default Signup;
