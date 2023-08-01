import React from "react";
import image from "../images/doc.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          "Your Health, Our Responsibility" embodies our commitment to providing
          top-notch healthcare services. We prioritize your well-being, ensuring
          personalized care and attention to your needs. Trust us to be your
          dedicated partners on your journey to better health, offering reliable
          support and expert guidance every step of the way. Together, we'll
          achieve a healthier, happier you.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
