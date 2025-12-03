import React from 'react'

function About() {
  return (
    <section id="about" className="testimonial-section">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-4  ">
        <h1
          data-aos="fade-in"
          data-aos-duration="800"
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

        <p
          data-aos="fade-in"
          data-aos-duration="800"
          className="text-secondary fs-5 w-75 mb-5  "
        >
          Where creativity meets precision. We focus on clean layouts, smooth
          interactions, and visually appealing experiences that bring brands to
          life in the digital world.
        </p>
      </div>
      <div
        className="testimonial-card"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="testimonial-text">
          <h2 className="testimonial-title">Software Engineer</h2>

          <p className="testimonial-quote">
            I craft reliable, scalable, and high-performance software solutions.
            My focus is building systems that run smoothly and solve real user
            problems.
          </p>

          <p className="testimonial-user">@Zubair javed</p>
        </div>

        <img
          src="st.PNG"
          alt="user"
          className="testimonial-img"
        />
      </div>

      <div
        className="testimonial-card"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="testimonial-text">
          <h2 className="testimonial-title">Full Stack Developer</h2>

          <p className="testimonial-quote">
            I build complete web applications from frontend to backend with
            clean, optimized code. My development workflow ensures fast, secure,
            and responsive experiences.
          </p>

          <p className="testimonial-user">@Noushin</p>
        </div>

        <img
          src="image06.jpg"
          alt="user"
          className="testimonial-img"
        />
      </div>

      <div
        className="testimonial-card"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="testimonial-text">
          <h2 className="testimonial-title">UI/UX Designer</h2>

          <p className="testimonial-quote">
            I design intuitive, user-friendly interfaces that enhance user
            experience. My goal is to create clean layouts that feel modern,
            smooth, and effortless.
          </p>

          <p className="testimonial-user">@Zunair</p>
        </div>

        <img
          src="cutie.PNG"
          alt="user"
          className="testimonial-img"
        />
      </div>
    </section>
  );
};

  

export default About