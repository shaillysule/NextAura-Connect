import React from "react";
import './Navbar.css';
const Navbar=()=>{
    return(
        <header className="nav">
            <div className="nav-inner">
                <div className="logo">ResourceShare</div>
                <nav className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <a href="#about">About</a>
                    <a href="/login" className="nav-cta">Login</a>
                    <a href="/signup"className="nac-cta primary">Sign up</a>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
