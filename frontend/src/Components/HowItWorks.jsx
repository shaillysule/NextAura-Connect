import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "List Your Resource",
      text: "Post unused items or services you can share.",
      icon: "📦",
    },
    {
      number: "2",
      title: "AI Finds Matches",
      text: "Our AI connects your listing with local needs.",
      icon: "🤖",
    },
    {
      number: "3",
      title: "Fast Delivery",
      text: "Optimized routes ensure quick & eco-friendly delivery.",
      icon: "🚴",
    },
    {
      number: "4",
      title: "Make an Impact",
      text: "Help your community while reducing waste.",
      icon: "🌍",
    },
  ];

  return (
    <section className="howitworks-section text-center">
      <h2 className="mb-5">How It Works</h2>
      <div className="d-flex justify-content-center align-items-start flex-wrap gap-5">
        {steps.map((step, index) => (
          <div key={index} className="how-step text-center">
            <div className="step-icon">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
