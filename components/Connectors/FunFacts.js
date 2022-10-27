import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>We always try to understand users expectation</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="contact-cta-box">
          <h3>Have any question about us?</h3>
          <p>Don't hesitate to contact us</p>

          <Link href="/contact">
            <a className="btn btn-primary">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
