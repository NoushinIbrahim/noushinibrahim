import React from "react";

const CenteredHero = () => {
  return (
    <section
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-4  "
      style={{
        backgroundColor: "#1c1c21",
        minHeight: "80vh",
        borderBottom: "2px solid #28282f",
      }}
    >
      <h1
        data-aos="fade-in"
        className="fw-bold  mb-3"
        style={{
          fontSize: "3rem",
          lineHeight: "4.5rem",
          background: "linear-gradient(90deg, #38bdf8, #fb923c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Crafting Designs That Speak
      </h1>

      <p className="text-secondary fs-5 w-75  ">
        Where creativity meets precision. We focus on clean layouts, smooth
        interactions, and visually appealing experiences that bring brands to
        life in the digital world.
      </p>
    </section>
  );
};

export default CenteredHero;
