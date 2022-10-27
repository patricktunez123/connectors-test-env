import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>OUR COMMITMENT</h2>
          <div className="bar"></div>
          <p>
            To help African solutions emerge by providing at least €130 million
            in funding from AFD-Proparco group, and a whole host of support
            programs designed to meet the needs of Africa’s innovative
            entrepreneurs.
          </p>
        </div>

        <div className="contact-cta-box">
          <h3>Want to know more?</h3>
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
