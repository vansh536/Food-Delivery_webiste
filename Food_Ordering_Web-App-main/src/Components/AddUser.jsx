import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // const result = await axios.get(`http://localhost:8080/getUserById/${id}`);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveUser", user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          <h3 className="tex-center">Register User </h3>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="mb-3">
              <div>
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)} required
                ></input>
                <div className="invalid-feedback">hello fill taht first</div>
                </div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary mx-2">
              Submit
            </button>
            <Link className="btn btn-outline-danger" to={"/home"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
