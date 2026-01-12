import React from "react";
import "./Signup.css";

export function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h3 className="text-center mb-4">Create your account</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="name"className="form-label">
                Name:           </label>
                <input type="name"className="form-control"id="name"placeholder="enter your name"required/>
            <label htmlFor="email" className="form-label">
              Email:
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
              Password:
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
            Sign up
          </button>
          <a href="/login" className="text-center mb-4">Already have account?</a>

        </form>
      </div>
    </div>
  );
}
