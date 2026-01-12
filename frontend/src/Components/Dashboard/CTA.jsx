import React from "react";

function CTA() {
  return (
    <section className="cta-section text-center py-5">
      <div className="container">
        <h2 className="cta-title mb-3">
          Ready to Share & Discover Resources?
        </h2>
        <p className="cta-sub mb-4">
          Join 10,000+ people building stronger communities today.
        </p>
        <div className="cta-buttons d-flex justify-content-center gap-3">
          <a href="/signup" className="btn btn-success btn-lg">
            List a Resource
          </a>
          <a href="/resources" className="btn btn-outline-danger btn-lg">
            Find a Resource
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
