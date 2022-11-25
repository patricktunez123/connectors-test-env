import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FunFacts = () => {
  const { t } = useTranslation();

  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t("OurCommitment.Title")}</h2>
          <div className="bar"></div>
          <p>{t("OurCommitment.p1")}</p>
        </div>

        <div className="contact-cta-box">
          <h3>Do not miss updates</h3>
          <p>Follow us on</p>

          <Link
            href="https://www.linkedin.com/company/digitalafrica/"
            target="_blank"
          >
            <a target="_blank" className="btn btn-primary">
              Linkedin
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
