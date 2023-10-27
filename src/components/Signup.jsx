import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./Signup.css";
import { auth } from "./Firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cfluid">
      <center>
        <form onSubmit={signup}>
          <h1>Create Account</h1>
          <p>
            <b>Email :</b>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </p>
          <p>
            <b>Password :</b>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </center>
    </div>
  );
};

export default Signup;
