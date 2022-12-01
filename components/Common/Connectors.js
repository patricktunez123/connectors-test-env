import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { ConnectorsArray } from "../Data/ConnectorsArray";
import { limitStringLength } from "../helpers/limitStringLength";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
            <div key={item?.id} className="col-lg-4 col-md-4">
              <div className="single-team">
                <div className="image_container">
                  <div className="team-image">
                    <img src={item?.imageURL} alt="image" />
                  </div>
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>{item?.name}</h3>
                    <div className="country_container">
                      <span>{item?.country}</span>
                      <span class={`fi fi-${item?.countryFlag}`}></span>
                    </div>
                  </div>

                  <ul>
                    {item?.socialLinks[0]?.twitter && (
                      <li>
                        <a href={item?.socialLinks[0]?.twitter} target="_blank">
                          <Icon.Twitter />
                        </a>
                      </li>
                    )}

                    {item?.socialLinks[0]?.linkdin && (
                      <li>
                        <a href={item?.socialLinks[0]?.linkdin} target="_blank">
                          <Icon.Linkedin />
                        </a>
                      </li>
                    )}
                  </ul>

                  <p>
                    {item?.id &&
                      limitStringLength(
                        t(`ConnectorsItems.c${item?.id}Desc`)
                      )}{" "}
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
                  <div className="image_container">
                    <div className="team-image">
                      <img src={connector?.imageURL} alt="image" />
                    </div>
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3> {connector?.name}</h3>
                      <div className="country_container">
                        <span>{connector?.country}</span>
                        <span class={`fi fi-${connector?.countryFlag}`}></span>
                      </div>
                    </div>
                    <ul>
                      {connector?.socialLinks[0]?.twitter && (
                        <li>
                          <a
                            href={connector?.socialLinks[0]?.twitter}
                            target="_blank"
                          >
                            <Icon.Twitter />
                          </a>
                        </li>
                      )}

                      {connector?.socialLinks[0]?.linkdin && (
                        <li>
                          <a
                            href={connector?.socialLinks[0]?.linkdin}
                            target="_blank"
                          >
                            <Icon.Linkedin />
                          </a>
                        </li>
                      )}
                    </ul>

                    <p>
                      {" "}
                      {connector?.id &&
                        t(`ConnectorsItems.c${connector?.id}Desc`)}{" "}
                    </p>
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
