import React, { useEffect, useState } from "react";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg px-4 sticky-top custom-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        {/* ✅ LOGO */}
        <a className="navbar-brand tech-logo" href="#home">
          TechNova
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
