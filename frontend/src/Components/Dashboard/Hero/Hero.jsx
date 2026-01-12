import React from "react";
import "./Hero.css";
import HeroIllustration from "./Heroillustration";

function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-card">
        <div className="hero-left">
          <h1 className="hero-title">
            Turn Spare Resources into Help for Your Community
          </h1>
          <p className="hero-sub">
            List your unused items, discover nearby needs, and let AI optimize
            resource sharing. Reduce waste, help faster, and strengthen your
            local community.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <a href="/signup" className="btn primary">List a resource</a>
            <a href="/login" className="btn ghost">Find a resouce</a>
          </div>

        
    
        </div>

        {/* Right section */}
        <div className="hero-right">
          <div className="dots"></div>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

export default Hero;
