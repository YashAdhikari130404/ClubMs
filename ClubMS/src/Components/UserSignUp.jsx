import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/signup/user_signup", values)
      .then((result) => {
        if (result.data.signupStatus) {
          setSuccess("User registered successfully!");
          setError(null);
          setTimeout(() => navigate("/user_login"), 2000);
        } else {
          setError(result.data.error);
          setSuccess(null);
        }
      })
      .catch((err) => console.log("Signup error:", err));
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        {error && <div className="text-danger">{error}</div>}
        {success && <div className="text-success">{success}</div>}
        <h2 className="text-center">Sign Up to Get Started</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              required
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
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/user_login")}
            >
              Login Here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
