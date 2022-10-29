import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const AboutUs = () => {
  return (
    <div id="About" className="what-we-do-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>About Digital Africa</h2>
          <div className="bar"></div>
          <p>
            Launched in 2018, Digital Africa is a € 130 million initiative aimed
            to equip African tech entrepreneurs with capabilities to design and
            scale-up ground-breaking innovations for the real economy. We bring
            together partners of all nationalities - incubators, institutional
            financiers, venture capitalists, technology clusters - and all
            committed to African digital entrepreneurs
          </p>
        </div>

        <div className="section-title">
          <h2>We work around 3 main axes:</h2>
          <div className="bar"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i style={{ fontSize: "20px", fontWeight: "900" }} className="">
                  1
                </i>
              </div>
              <h3>
                <Link href="#/">
                  <a>EQUIPPING HIGH IMPACT DIGITALLY ENABLED START-UP</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i style={{ fontSize: "20px", fontWeight: "900" }} className="">
                  2
                </i>
              </div>

              <h3>
                <Link href="#/">
                  <a>
                    SOURCING AFRICAN AND GLOBAL FINANCE TO SCALE-UP PROJECTS
                  </a>
                </Link>
              </h3>

              <p>
                Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i style={{ fontSize: "20px", fontWeight: "900" }} className="">
                  3
                </i>
              </div>
              <h3>
                <Link href="#/">
                  <a>
                    DEVELOPING RESEARCH & POLICY RECOMMENDATIONS IN SUPPORT OF
                    MADE IN AFRICA DIGITAL INNOVATIONS
                  </a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
