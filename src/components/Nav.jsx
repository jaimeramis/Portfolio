import { useState, useRef, useEffect } from "react";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import urls from "../data/urls.json";

function Nav({ t }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [selectedNavItem, setSelectedNavItem] = useState("navItem01");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const changeNavItem = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <>
      <nav>
        <div className={`navbar${navbarOpen ? " show-menu" : ""}`}>
          <ul className="navbar-items">
            <li>
              <a className={selectedNavItem === "navItem01" ? "navbar-active" : ""} onClick={() => changeNavItem("navItem01")} href="#about">
                {t("navItem01")}
              </a>
            </li>
            <li>
              <a className={selectedNavItem === "navItem02" ? "navbar-active" : ""} onClick={() => changeNavItem("navItem02")} href="#skills">
                {t("navItem02")}
              </a>
            </li>
            <li>
              <a className={selectedNavItem === "navItem03" ? "navbar-active" : ""} onClick={() => changeNavItem("navItem03")} href="#projects">
                {t("navItem03")}
              </a>
            </li>
            <li>
              <a className={selectedNavItem === "navItem04" ? "navbar-active" : ""} onClick={() => changeNavItem("navItem04")} href="#brand">
                {t("navItem04")}
              </a>
            </li>
            <li>
              <a className={selectedNavItem === "navItem05" ? "navbar-active" : ""} onClick={() => changeNavItem("navItem05")} href="#contact">
                {t("navItem05")}
              </a>
            </li>
          </ul>
          {/* SOCIAL MEDIA */}
          <div className="navbar-social">
            <a href={urls.trailhead} target="_blank">
              <img src="/images/trailhead_logo.png" alt="Linkedln" />
            </a>
            <a href={urls.linkedln} target="_blank">
              <img src="/images/linkdln_logo.png" alt="Linkedln" />
            </a>
          </div>
          {/* END SOCIAL MEDIA */}
          {/* LANGUAGES */}
          <div className="navbar-languages">
            <button className={selectedLanguage === "en" ? "navbar-active-btn" : ""} onClick={() => changeLanguage("en")}>
              EN
            </button>
            <button className={selectedLanguage === "es" ? "navbar-active-btn" : ""} onClick={() => changeLanguage("es")}>
              ES
            </button>
          </div>
          {/* END LANGUAGES */}
        </div>

        {/* MOBILE */}
        <div className="menu__mobile">
          <input onClick={() => setNavbarOpen((prev) => !prev)} id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
        </div>
        {/* END MOBILE */}
      </nav>
    </>
  );
}

export default withNamespaces()(Nav);
