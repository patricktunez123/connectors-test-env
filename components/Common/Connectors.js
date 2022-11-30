import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { ConnectorsArray } from "../Data/ConnectorsArray";
import { limitStringLength } from "../helpers/limitStringLength";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";

const Connectors = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connector, setConnector] = useState();
  const showModal = (item) => {
    setConnector(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("connector", connector);

  return (
    <div
      id="Connectors"
      className="team-area repair-team-area pt-80 pb-50 bg-eef6fd"
    >
      <div className="container">
        <div className="section-title">
          <h2>{t("OurConnectors.Title")}</h2>
          <div className="bar"></div>
          <p>{t("OurConnectors.p1")}</p>
        </div>
        <div className="connectors_text">
          <ul>
            <li>{t("OurConnectors.l1")}</li>
            <li>{t("OurConnectors.l2")}</li>
            <li>{t("OurConnectors.l3")}</li>
            <li>{t("OurConnectors.l4")}</li>
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
                    <h3>
                      {item?.name &&
                        item?.name?.split(" ")[0] +
                          " " +
                          item?.name?.split(" ")[1].toLocaleUpperCase()}
                    </h3>
                    <span>{item?.post}</span>
                  </div>

                  <ul>
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
                  </ul>

                  <p>
                    {item?.desc && limitStringLength(item?.desc)}{" "}
                    <Button onClick={() => showModal(item)} type="text">
                      read more
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          ))}

          <Modal
            title={connector?.name}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            className="connector_modal"
            footer={false}
          >
            <div className="row justify-content-center">
              <div key={connector?.id} className="col-lg-12 col-md-12">
                <div className="single-team">
                  <div className="team-image">
                    <img src="/images/team-image/team1.jpg" alt="image" />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>
                        {" "}
                        {connector?.name &&
                          connector?.name?.split(" ")[0] +
                            " " +
                            connector?.name?.split(" ")[1].toLocaleUpperCase()}
                      </h3>
                      <span>{connector?.post}</span>
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

                    <p>{connector?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Connectors;
