import React from "react";
import "./HowItWorksHome.css";

export function HowItWorksHome() {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Find a Resource",
      text: "Browse or search items available near you."
    },
    {
      id: 2,
      icon: "📅",
      title: "Book Instantly",
      text: "Choose dates and send a booking request."
    },
    {
      id: 3,
      icon: "🤝",
      title: "Pick Up or Deliver",
      text: "Get the item and use it when you need."
    }
  ];

  return (
    <section className="how-home">
      <h2>How It Works</h2>
      <p className="how-subtext">
        Renting and sharing resources is simple and fast
      </p>

      <div className="how-steps">
        {steps.map(function (step) {
          return (
            <div key={step.id} className="how-card">
              <span className="how-icon">{step.icon}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


