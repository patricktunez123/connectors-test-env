import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { ConnectorsArray } from "../Data/ConnectorsArray";
import { limitStringLength } from "../helpers/limitStringLength";

const Connectors = () => {
  return (
    <div
      id="Connectors"
      className="team-area repair-team-area pt-80 pb-50 bg-eef6fd"
    >
      <div className="container">
        <div className="section-title">
          <h2>Our connectors</h2>
          <div className="bar"></div>
          <p>
            The 15 Connectors of this first cohort, selected for their
            professional experience, commitment and leadership skills, are
            responsible for carrying out four missions in their region:
          </p>
        </div>
        <div className="connectors_text">
          <ul>
            <li>
              Act as an Ambassador representing Digital Africa in the region and
              act as a link between their community and Digital Africa
            </li>
            <li>Organize activities and events on behalf of Digital Africa</li>
            <li>
              Identify and mobilize resources (financial, opportunities, etc...)
            </li>
            <li>Assist in mapping ecosystems and help suggest solutions</li>
          </ul>
        </div>

        <div className="row justify-content-center">
          {ConnectorsArray.map((item) => (
            <div key={item?.id} className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src="/images/team-image/team1.jpg" alt="image" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>{item?.name}</h3>
                    <span>{item?.post}</span>
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
                      <a href="https://www.instagram.com/" target="_blank">
                        <Icon.Instagram />
                      </a>
                    </li>
                  </ul>

                  <p>
                    {item?.desc && limitStringLength(item?.desc)}{" "}
                    <span>
                      <u>read more</u>
                    </span>
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
