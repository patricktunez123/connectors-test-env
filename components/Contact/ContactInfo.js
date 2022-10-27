import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <div className="contact-info-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3>Email us</h3>
              <p>
                <a href="mailto:digital-dummy-email@digital.com">
                  digital-dummy-email@digital.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.MapPin />
              </div>
              <h3>Location</h3>
              <p>KN 65, Kigali, Rwanda</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Phone />
              </div>
              <h3>Call us</h3>
              <p>
                <a href="tel:+1234567890">+250 700000000</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
