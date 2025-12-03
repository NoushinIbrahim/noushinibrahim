import React from "react";



const Webflow = () => {
  return (
    <section
      id="services"
      className="container-fluid d-flex align-items-center"
      style={{
        backgroundColor: "#0f121a",
        minHeight: "100vh",
        borderBottom: "2px solid #28282f",
      }}
    >
      <div className="row align-items-center px-5 w-100">
        <div
          className="col-md-6 text-white px-5 py-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1
            className="fw-bold mb-4"
            style={{
              fontSize: "2.5rem",
              background: "linear-gradient(90deg, #7dd3fc, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Professional Webflow & Modern Web Development
          </h1>

          <p className="text-secondary mb-5">
            I design and develop clean, responsive, and high-converting websites
            using Webflow and WordPress.
          </p>

          <button className="btn btn-outline-light rounded-pill px-4 py-2 mb-0">
            Let's Connect →
          </button>
        </div>

        <div
          className="col-md-5 d-flex justify-content-center zoo-continer"
          data-aos-duration="1200"
        >
          <img
            data-aos="zoom-in"
            src="https://cdn.prod.website-files.com/62822335af20554f2df9fc3e/67177c636f4561f0f3e4898b_0638f7c20430abb0bfa67698ab7a43932a7877631c4462f5860b1a066af97176.png"
            alt="Laptop"
            className="img-fluid rounded-4 shadow-lg zoom-img"
            style={{ width: "100%", maxWidth: "520px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Webflow;
