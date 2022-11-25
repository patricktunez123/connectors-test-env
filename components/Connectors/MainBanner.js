import React from "react";
import { useTranslation } from "react-i18next";
// import * as Icon from "react-feather";

const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="bigdata-analytics-banner bg-image">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>{t("MainBanner.Title")}</h1>
          <p>{t("MainBanner.p1")}</p>
        </div>
      </div>

      <div className="banner-boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>Connectors</h3>
                <p>15 Connectors on the continent</p>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Map />
                </div>
                <h3>Regions</h3>
                <p>5 Regions (North, South, West, East and Central Africa)</p>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>Connectors per region</h3>
                <p>3 Connectors per region</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
