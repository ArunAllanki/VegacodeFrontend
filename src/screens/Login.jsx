import React, { useState } from "react";
import "./Login.css";
import logo from "../Images/NewLogo.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(""); // Clear errors
    setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === "allanki.arun@gmail.com" &&
      formData.password === "1234"
    ) {
      navigate("/Home");
    } else {
      alert("Wrong credentials !!!");
    }
    // if (isSignUp) {
    //   if (formData.password !== formData.confirmPassword) {
    //     setError("Passwords do not match!");
    //     return;
    //   }
    //   alert("Sign-Up Successful!");
    // } else {
    //   alert("Login Successful!");
    // }

    // Reset form after successful login/sign-up
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="Logging">
      <div className="form-box">
        <img src={logo} alt="Seva Logo" className="logo" />
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {isSignUp && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          {error && <p className="error">{error}</p>}
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};
