import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("person");
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
          role
        }
      );

      alert("Signup Successful");
      navigate("/login");

    } catch (err) {
      alert("Error creating account");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h3 className="text-center mb-4">Create your account</h3>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         <div className="role-selection">
  <div
    className={`role-card ${role === "seller" ? "active" : ""}`}
    onClick={() => setRole("seller")}
  >
    <h6>Sell</h6>
    <p>List your resources for rent</p>
  </div>

  <div
    className={`role-card ${role === "user" ? "active" : ""}`}
    onClick={() => setRole("user")}
  >
    <h6>Rent</h6>
    <p>Browse and rent nearby resources</p>
  </div>
</div>
          <button type="submit" className="btn btn-success w-100">
            Sign up
          </button>

          <p className="text-center mt-3">
            Already have account? <a href="/login">Login</a>
          </p>

        </form>
      </div>
    </div>
  );
}