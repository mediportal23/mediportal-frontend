import React from "react";
import image from "../images/doc2.png";
import "./../styles/aboutus.css";
const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img id="doc2" src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              Welcome to our Healthcare Application, where we prioritize your
              well-being with cutting-edge technology and compassionate care.
              Book appointments with top-rated doctors, receive personalized
              health insights, and manage your health conveniently from the
              comfort of your home. Your health is our passion, and we're
              committed to making a positive impact on your life through
              innovative healthcare solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
