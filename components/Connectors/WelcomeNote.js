import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const WelcomeNote = () => {
  const { t } = useTranslation();

  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{t("WelcomeNote.Title")}</h2>
          <div className="bar"></div>
        </div>
        <div className="ceo_notes">
          <h5>{t("WelcomeNote.p1")}</h5>
          <p>{t("WelcomeNote.p2")}</p>
          <br />
          <p>{t("WelcomeNote.p3")}</p>

          <h6>{t("WelcomeNote.p4")}</h6>
          <ul>
            <li>{t("WelcomeNote.l1")}</li>
            <li>{t("WelcomeNote.l2")}</li>
            <li>{t("WelcomeNote.l3")}</li>
            <li>{t("WelcomeNote.l4")}</li>
          </ul>
          <p>{t("WelcomeNote.p5")}</p>
          <h5>{t("WelcomeNote.p6")}</h5>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNote;
