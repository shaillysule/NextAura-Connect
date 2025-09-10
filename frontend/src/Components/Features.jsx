import React from "react";
import './Features.css';
function Features() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Key Features</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        

        <div className="col">
          <div className="card h-100 text-center">
          <div className="card-img-container">  <img src="/assets/Shortestroute.png" className="card-img-top p-3" alt="Optimized Routes" /></div>
            <div className="card-body">
              <h5 className="card-title">Optimized Routes</h5>
              <p className="card-text">
                Find the fastest delivery paths, save time, and reduce carbon footprint.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center">
          <div className="card-img-container">  <img src="/assets/AI matching.png" className="card-img-top p-3" alt="AI Matching" /></div>
            <div className="card-body">
              <h5 className="card-title">AI-Powered Matching</h5>
              <p className="card-text">
                Our AI instantly connects people with the right resources in their community.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center">
          <div className="card-img-container"><img src="/assets/Notifications.png" className="card-img-top p-3" alt="Notifications" /></div>
            <div className="card-body">
              <h5 className="card-title">Instant Notifications</h5>
              <p className="card-text">
                Get real-time updates whenever a resource is available nearby.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Features;
