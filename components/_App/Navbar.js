import React from "react";
import { useTranslation } from "react-i18next";
import Link from "../../utils/ActiveLink";
const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const { i18n, t } = useTranslation();
  const handleChangeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header
      id="header"
      className="headroom navbar-color-white navbar-style-four"
    >
      <div className="Connectors_Digital_Africa-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link target="_blank" href="https://digital-africa.co/">
              <a
                target="_blank"
                onClick={toggleNavbar}
                className="navbar-brand"
              >
                <img
                  style={{ width: "130px" }}
                  src="/images/logo.svg"
                  alt="logo"
                />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      {t("navContent.Home")}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#Connectors" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      {t("navContent.Connectors")}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#About" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      {t("navContent.AboutDigitalAfrica")}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <button
                className="btn btn-primary"
                onClick={() => handleChangeLang("en")}
              >
                EN
              </button>

              <button
                className="btn btn-primary"
                onClick={() => handleChangeLang("fr")}
              >
                FR
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
