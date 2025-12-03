import React from "react";


const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* Background GIF */}
      <div
        className="hero-bg zoom-container"
        data-aos="fade-in"
        data-aos-duration="1200"
      ></div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Left Content */}
      <div className="hero-content" data-aos="fade-up" data-aos-duration="800">
        <h4 className="small-title">TechNova</h4>

        <h1 className="main-heading">
          Next-Gen <span>Solutions</span>
        </h1>

        <p className="hero-text">
          We build modern websites, powerful apps, and digital experiences that
          help businesses grow faster.
        </p>

        <button
          className="hero-btn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Hero;
