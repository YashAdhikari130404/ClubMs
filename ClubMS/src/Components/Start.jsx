import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import { FaUserCircle } from "react-icons/fa"; // Importing User Icon

const Start = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown on icon click
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Navigate to respective login page
  const handleLogin = (path) => {
    navigate(path);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div
      className="loginPage"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        position: "relative",
        background: `linear-gradient(135deg, #6a11cb, #2575fc, #8e44ad)`, // Updated vibrant gradient
        backgroundSize: "cover",
      }}
    >
      {/* Login Icon at Top Right */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
          fontSize: "32px",
          color: "#007bff",
        }}
        onClick={handleDropdown}
      >
        <FaUserCircle />
      </div>

      {/* Dropdown for Login */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "10px",
            zIndex: 999,
          }}
        >
          <button
            onClick={() => handleLogin("/user_login")}
            style={{
              padding: "10px",
              backgroundColor: "#f8f9fa",
              border: "none",
              borderBottom: "1px solid #ddd",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Login as User
          </button>
          <button
            onClick={() => handleLogin("/adminlogin")}
            style={{
              padding: "10px",
              backgroundColor: "#f8f9fa",
              border: "none",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Login as Admin
          </button>
        </div>
      )}

      {/* Animated Welcome Text */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "100px", // Increased font size
            fontWeight: "bold",
            color: "#fff", // White text for better contrast
          }}
        >
          <Typical
            steps={[
              "Welcome",
              100,
              "Welcome to",
              100,
              "Welcome to Club",
              100,
              "Welcome to Club Management System",
              1000,
            ]}
            loop={1}
            wrapper="span"
          />
        </h1>
      </div>
    </div>
  );
};

export default Start;
