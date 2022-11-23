import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Our commitment</h2>
          <div className="bar"></div>
          <p>
            Our vision is to foster a more inclusive and sustainable global
            economy through ‘made in Africa’ digital innovation - and projects
            that will become global benchmarks over time. The Africa we work
            with on a daily basis is undoubtedly the new driver of global
            growth; it is also a laboratory of ideas that can inspire all
            regions of the world, both emerging and developed ones. By playing a
            bridging role between Africa and the rest of the world with
            enthusiasm and conviction, we help to draw attention to African
            solutions and to connect Africa to global value chains. That way, we
            define a new model of co-development around the common interests
            that brings Africa and its international partners closer together.
          </p>
        </div>

        <div className="contact-cta-box">
          <h3>Do not miss updates</h3>
          <p>Follow us on</p>

          <Link
            href="https://www.linkedin.com/company/digitalafrica/"
            target="_blank"
          >
            <a target="_blank" className="btn btn-primary">
              Linkedin
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
