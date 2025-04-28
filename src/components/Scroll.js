import React, { useState, useEffect } from "react";
import "./Scroll.css";

const carFacts = [
  "The first car was invented in 1886 by Karl Benz.",
  "The world’s best-selling car is the Toyota Corolla.",
  "The average car has about 30,000 parts.",
  "The Bugatti Chiron can go from 0 to 60 mph in under 2.5 seconds.",
  "Electric cars were invented before gasoline cars.",
  "The longest traffic jam ever recorded was over 60 miles long in China.",
  "Rolls-Royce cars are mostly hand-built.",
  "The world's fastest street-legal car is the SSC Tuatara.",
  "Volvo invented the three-point seatbelt and made the patent open for all to save lives.",
  "The most expensive car ever sold was a 1963 Ferrari 250 GTO at $70 million.",
  "Tesla cars can receive updates over-the-air like smartphones.",
  "Henry Ford introduced the moving assembly line in 1913.",
  "The first speeding ticket was issued in 1896 for driving 8 mph!"
];

const CarScroll = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 20);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="car-container">
      <div className="car-fact-list">
        {carFacts.map((fact, index) => (
          <p key={index} className="car-fact">
            {fact}
          </p>
        ))}
      </div>

      {showButton && (
        <button className="car-scroll-top" onClick={goToTop}>
          🚗⬆️
        </button>
      )}
    </div>
  );
};

export default CarScroll;
