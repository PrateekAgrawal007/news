import React from "react";
import "../Footer.css"; // Create this CSS file for additional styles

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <h5 className="mb-0">
          Developed by <span className="fw-bold">Prateek Agrawal</span>
        </h5>
        <p className="mb-0 mt-2">
          <a
            href="https://linkedin.com/in/prateek-agrawal-83970620a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/PrateekAgrawal007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light ms-2"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
