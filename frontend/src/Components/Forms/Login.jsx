import React from "react";
import "./Signup.css";

export function Login() {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h3 className="text-center mb-4">Login</h3>

        <form>
          <div className="mb-3">
        
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
           Login
          </button>
        </form>
      </div>
    </div>
  );
}
