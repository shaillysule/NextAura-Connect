import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      const { token, role } = res.data;

      // Save token & role
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      console.log("Full Response:", res.data);
      if (role === "seller") {
        navigate("/seller");
      }
      else if (role === "user") {
        navigate("/homepage");
      }
      // else if (role === "admin") {
      //   navigate("/admin-panel");
      // }
      else {
        navigate("/");
      }

    } catch (err) {
      console.error(err);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}