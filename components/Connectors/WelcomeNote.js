import React from "react";
import Link from "next/link";

const WelcomeNote = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Welcome note by the Chief Executive Officer</h2>
          <div className="bar"></div>
        </div>
        <div className="ceo_notes">
          <h5>
            Digital Africa is pleased to unveil the first cohort of its
            Connectors program.
          </h5>
          <p>
            These fifteen high-caliber African personalities, selected from
            several hundred profiles, will now represent Digital Africa in their
            respective regions on the continent to collaborate and contribute to
            the advancement of local and regional entrepreneurial and
            technological ecosystems, research and investment in Africa.
          </p>
          <br />
          <p>
            With its Connectors program, Digital Africa intends to strengthen
            its presence on the African territory to connect as closely as
            possible to the realities and challenges and opportunities on the
            ground, and to rely on those who make the tech ecosystem alive on
            the continent by giving them the means to amplify their impact on
            the development of local and regional ecosystems in an inclusive,
            collaborative and sustainable manner.
          </p>

          <h6>
            The 15 Connectors of this first cohort, selected for their
            professional experience, their commitment and their strong sense of
            leadership, have the responsibility to carry out four missions in
            their region:
          </h6>
          <ul>
            <li>
              Take on the role of Ambassador representing Digital Africa in the
              region and be the the linkage between their community and Digital
              Africa
            </li>
            <li>Organize activities and events on behalf of Digital Africa</li>
            <li>
              Identify and mobilize resources (financial, opportunities, etc...)
            </li>
            <li>Help map ecosystems and help suggest solutions</li>
          </ul>
          <p>
            We believe that Africa needs African-designed solutions to the
            continent's structural and infrastructural problems, be it in
            health, sports, energy, agriculture and we believe that it is in the
            made-in-Africa tech that can do it. Our Connectors program is part
            of this approach. Designed in a bottom-up approach, it contributes
            to consolidate the network approach at the heart of Digital Africa's
            vision, through its objective: to support, federate and strengthen
            this ecosystem, to move forward together. Already a strong and
            dynamic community, with effective partnerships with incubators,
            hubs, institutional financiers, venture capitalists, tech clusters,
            training organizations, universities, etc., Digital Africa is thus
            accentuating its local footprint to better understand the needs,
            design more effective programs and thus reach a maximum number of
            beneficiaries and partners on the continent.
          </p>
          <h5>We wish our 15 Connectors success in their mission!</h5>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNote;
