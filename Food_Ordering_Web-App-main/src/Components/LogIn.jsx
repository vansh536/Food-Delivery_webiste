import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGlobelContext } from "../Context/ProductContext";
import GoogleLoginComponent from "./GoogleLoginComponent";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  let navigate = useNavigate();
  const [logInfo, setLogInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logInfo;
  const { count, cart, loginData, setLoginData } = useGlobelContext();

  const onInputChange = (e) => {
    setLogInfo({ ...logInfo, [e.target.name]: e.target.value });
    // console.log(email);
    // console.log(password);
  };
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
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.get(
        `http://localhost:8080/getUserByEmail/${email}`
      );

      if (result.data.password === password) {
        isLogedIn();
      } else {
        alert("Invalid Email");
      }
    } catch (error) {
      console.log(error);
      alert("Enter Valid Creadintial..!");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="tex-center text-bold ">lOG iN </h3>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
              <div className="form-floating mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                ></input>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-floating mt-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                ></input>
                <label htmlFor="pass" className="form-label mx-4">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-center mt-3">
              
              <GoogleLoginComponent />
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Log In
              </button>
              <Link className="btn btn-outline-danger mx-2 mt-4" to={"/"}>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default LogIn;
