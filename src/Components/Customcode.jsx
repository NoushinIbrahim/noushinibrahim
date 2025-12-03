import React from 'react'

function Customcode() {
  return (
    <section
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
            Want to Build a Custom-Coded Website?
          </h1>

          <p className="text-secondary mb-5">
            I develop fully custom-coded solutions that are fast, scalable, and
            tailored to your business needs. I work with HTML, CSS, JavaScript,
            Tailwind CSS, Python, and more.
          </p>
        </div>

        <div className="col-md-5 d-flex justify-content-center zoo-continer">
          <img
            src="/code.jpg"
            alt="Cutom-code-img"
            className="img-fluid rounded-4 shadow-lg zoom-img"
            style={{ width: "100%", maxWidth: "520px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Customcode