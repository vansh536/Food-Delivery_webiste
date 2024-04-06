import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "./FirebaseConfig";

function ForgotePass() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const eventHandler = (event) => {
    const a = event.target.value;
    setEmail(a);
    
  };
  const sendEmailForReset = () => {
    // console.log(email)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Reset Link Sent On Your email If it Is Register..");
        // navigate("/login");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        setErrorMsg(`${error.message} or Invalid Email`);
        setEmail("")
        // ..
      });
  };
  return (
    <div className="container d-flex justify-content-center mt-4">
      <div
        className="bg-white p-6 shadow mt-6 rounded-lg "
        style={{ width: "35rem" }}
      >
        <div className="container  mt-10  bg-white ">
          <div className="form-floating mb-3   ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              name="email"
              onChange={eventHandler}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <span style={{ color: "red" }}>{errorMsg}</span>
          <button
            type="button"
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold  mb-6 py-2 px-4 rounded"
            onClick={sendEmailForReset}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotePass;
