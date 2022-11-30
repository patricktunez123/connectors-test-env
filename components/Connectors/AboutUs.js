import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div id="About" className="what-we-do-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t("AboutDigitalAfrica.Title")}</h2>
          <div className="bar"></div>
          <p>{t("AboutDigitalAfrica.p1")}</p>
        </div>

        <div className="section-title">
          <h2>{t("AboutDigitalAfrica.p2")}</h2>
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
                  <a>{t("AboutDigitalAfrica.f1Title")}</a>
                </Link>
              </h3>
              <p>{t("AboutDigitalAfrica.f1P")}</p>
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
                  <a>{t("AboutDigitalAfrica.f2Title")}</a>
                </Link>
              </h3>

              <p>{t("AboutDigitalAfrica.f2P")}</p>
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
                  <a>{t("AboutDigitalAfrica.f3Title")}</a>
                </Link>
              </h3>
              <p>{t("AboutDigitalAfrica.f3P")}</p>
            </div>
          </div>

          <div className="section-title">
            <p>{t("AboutDigitalAfrica.p3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
