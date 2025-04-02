import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
            if(result.data.loginStatus){
              navigate("/home")
            }else{
              setError(result.data.error)
            }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <div className="text-danger">
          {
            error && error
          }
          </div> 
        <h2 className="text-center adminh2">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary w-100 adminbut" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
