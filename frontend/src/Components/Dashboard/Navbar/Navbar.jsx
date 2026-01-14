import React from "react";

const Navbar = () => {
  return (
<nav
  className="navbar navbar-expand-lg"
  style={{
    backgroundColor: "#d9e4ea",
    borderBottom: "2px solid #4fa3a5",
  }}
>

      <div className="container">
        <a className="navbar-brand" href="/">
          NexAuraConnect
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/homepage">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign up
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/sellerDashboard">
                Seller DashBoard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
