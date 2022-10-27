import React from "react";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="single-footer-widget">
              <h6>We are on social media</h6>

              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="facebook"
                    target="_blank"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    className="twitter"
                    target="_blank"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagramcom/"
                    className="instagram"
                    target="_blank"
                  >
                    <Icon.Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="linkedin"
                    target="_blank"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>Copyright &copy; {currentYear} Digital Africa.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
