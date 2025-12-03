import React from 'react'

function Centercustom() {
  return (
    <section
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-4  "
      style={{
        backgroundColor: "#1c1c21",
        minHeight: "70vh",
        borderBottom: "2px solid #28282f",
      }}
    >
      <h1
        data-aos="fade-in"
        data-aos-duration="1200"
        className="fw-bold  mb-3"
        style={{
          fontSize: "3rem",
          lineHeight: "4.5rem",
          background: "linear-gradient(90deg, #38bdf8, #fb923c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Fully Custom Development &lt;/&gt;
      </h1>

      <p className="text-secondary fs-5 w-75  ">
        Whether it's a custom website, a dynamic feature, a backend script, or a
        fully coded UI, I can build it from scratch exactly the way you want
      </p>
    </section>
  );
}

export default Centercustom