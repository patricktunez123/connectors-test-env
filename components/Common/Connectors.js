import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Connectors = () => {
  return (
    <div className="team-area repair-team-area pt-80 pb-50 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>Meet our connectors</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row justify-content-center">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src="/images/team-image/team1.jpg" alt="image" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Instagram />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connectors;
