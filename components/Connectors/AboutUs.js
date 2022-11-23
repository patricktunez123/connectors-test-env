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
            at equipping African tech entrepreneurs with capabilities to design
            and scale-up ground-breaking innovations for the real economy. We
            bring together partners of all nationalities who are all committed
            to African digital entrepreneurs: incubators, technology clusters,
            venture capitalists, and institutional financiers, foremost among
            which are the Agence Française de Développement (AFD) and Proparco.
          </p>
        </div>

        <div className="section-title">
          <h2>
            Our approach is informed by a clear diagnosis of the needs of
            entrepreneurs from the field to structure a set of programs around
            three main areas of focus:{" "}
          </h2>
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
                  <a>Focus Area 1</a>
                </Link>
              </h3>
              <p>
                Equipping high impact digitally-enabled startups (our proposed
                approach to better source Digital Innovation).
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
                  <a>Focus Area 2</a>
                </Link>
              </h3>

              <p>
                Sourcing African and Global Finance to Scale up Projects - and
                facilitate access to finance (our proposed approach to better
                scale digital innovation).
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
                  <a>Focus Area 3</a>
                </Link>
              </h3>
              <p>
                Developing research and Policy recommendations in support of
                Made In Africa Digital Innovation (our proposed approach to
                better leverage digital innovation).
              </p>
            </div>
          </div>

          <div className="section-title">
            <p>
              Umbrella activities: In support of African tech and innovative
              ecosystems to disseminate successful made in Africa’ technological
              ventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
