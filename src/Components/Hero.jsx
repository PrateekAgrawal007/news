// import React from "react";

// const Hero = () => {
//   return (
//     <div
//       className="container-fluid bg-secondary text-white d-flex flex-column justify-content-center align-items-center"
//       style={{ height: "50vh" }}
//     >
//       <h1 style={{ fontSize: "50px ", color: "orange" }}>NEWS HUB</h1>
//       <h5>THE WEBSITE BUILD WITH THE NEWS API</h5>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import "animate.css";

import "../Hero.css"; //Import the CSS file for the background image

const Hero = () => {
  return (
    <div
      className="container-fluid hero-section text-white d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "70vh" }}
    >
      <h1
        className="display-1 fw-bold mb-3 animate__animated animate__fadeInDown"
        style={{ color: "#fcbf49" }}
      >
        NEWSHUB
      </h1>
      <h5
        className="lead mb-4 animate__animated animate__fadeInUp"
        style={{ letterSpacing: "1px", textTransform: "capitalize" }}
      >
        Breaking News at Your Fingertips, Every Moment
      </h5>
      <a
        href="#latest-news"
        className="btn btn-lg btn-outline-light px-5 py-3 animate__animated animate__zoomIn"
      >
        Explore Latest News
      </a>
    </div>
  );
};

export default Hero;
