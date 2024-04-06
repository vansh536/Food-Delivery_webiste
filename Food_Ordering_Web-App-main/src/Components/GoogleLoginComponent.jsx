import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";
import { useGlobelContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GoogleLoginComponent() {
  let navigate = useNavigate();
  const { count, cart, loginData, setLoginData } = useGlobelContext();
  const isLogedIn = () => {
    console.log("lOG IN sUCCESS");

    const isLogedIn = localStorage.getItem("isLogedIn");
    localStorage.setItem("isLogedIn", true);

    toast.success("Log In SuccesFull", {
      position: "top-center",
      autoClose:2000,
      onClose: () => {
        // Navigate to cartPage after the toast is closed
        navigate("/cartPage");
      },
    });
  };
  return (
    <>
      <GoogleOAuthProvider clientId="413016402359-b165dqc2v0lp0gcmses7paj9mrrvgvm7.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            setLoginData(decoded)
            console.log(decoded);
            isLogedIn();
            console.log("log in data is ", loginData);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      <ToastContainer />
    </>
  );
}

export default GoogleLoginComponent;
