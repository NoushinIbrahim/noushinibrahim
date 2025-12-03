import React from "react";
import { Container } from "react-bootstrap";
import {
  FaTwitter,
  FaInstagram,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";



const Contact = () => {
  return (
    <div id="contact" className="hero-section d-flex align-items-center">
      <Container>
        <h1 className="hero-title" data-aos="fade-in" data-aos-duration="1200">
          Contact Us
        </h1>

        <p className="hero-text" data-aos="fade-in" data-aos-duration="1200">
          Have any questions or need help? We’re here to support you. Feel free
          to reach out to us anytime through the details below.
        </p>

        <div
          className="hero-icons "
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaTwitter />
            </span>
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaInstagram />
            </span>
          </a>

          <a href="tel:+923001234567">
            <span>
              <FaMobileAlt />
            </span>
          </a>

          <a href="mailto:yourmail@gmail.com">
            <span>
              <FaEnvelope />
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
