import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComponent from "./GoogleLoginComponent";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = user;

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

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post(`http://localhost:8080/saveUser`, user);
    navigate("/logIn");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          <h3 className="tex-center text-bold ">Sign Up </h3>
          <form
            onSubmit={(e) => onSubmitHandler(e)}
            className="g-3  needs-validation"
            novalidate
          >
            <div className="mb-3">
              <div className="form-floating mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  required
                  minLength={"2"}
                ></input>
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
                required
                maxlength="10"
                minLength={"6"}
              ></input>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
            </div>
              <div className="form-floating mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  required
                ></input>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-floating mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                  required
                  minLength={"4"}
                  maxLength={"8"}
                ></input>
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center m-3">
            <GoogleLoginComponent />
            </div>

            <button type="submit" className="btn btn-outline-primary m-2">
              Submit
            </button>
            <Link className="btn btn-outline-danger m-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
