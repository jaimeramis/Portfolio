import { useState } from "react";
import { withNamespaces } from "react-i18next";
import urls from "../data/urls.json";

const Projects = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState("web");

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const projectsData = [
    {
      category: "web",
      title: t("webTitle00"),
      subtitle: t("webSubtitle00"),
      link: urls.mahou,
      imageClass: "mahou",
    },
    {
      category: "web",
      title: t("webTitle01"),
      subtitle: t("webSubtitle01"),
      link: urls.cerave,
      imageClass: "cerave",
    },
    {
      category: "web",
      title: t("webTitle02"),
      subtitle: t("webSubtitle02"),
      link: urls.caprabo,
      imageClass: "caprabo",
    },
    {
      category: "web",
      title: t("webTitle03"),
      subtitle: t("webSubtitle03"),
      link: urls.hematohub,
      imageClass: "hematohub",
    },
    {
      category: "web",
      title: t("webTitle04"),
      subtitle: t("webSubtitle04"),
      link: urls.fashion,
      imageClass: "fashion",
    },
    {
      category: "web",
      title: t("webTitle05"),
      subtitle: t("webSubtitle05"),
      link: urls.player,
      imageClass: "player",
    },
    {
      category: "web",
      title: t("webTitle06"),
      subtitle: t("webSubtitle06"),
      link: urls.loreal,
      imageClass: "loreal",
    },
    {
      category: "banner",
      title: t("bannerTitle01"),
      subtitle: "",
      link: urls.ikea,
      imageClass: "ikea",
    },
    {
      category: "banner",
      title: t("bannerTitle02"),
      subtitle: "",
      link: urls.opel,
      imageClass: "opel",
    },
    {
      category: "banner",
      title: t("bannerTitle03"),
      subtitle: "",
      link: urls.movistar,
      imageClass: "movistar",
    },
    {
      category: "news",
      title: t("newsTitle01"),
      subtitle: "",
      link: urls.iberia,
      imageClass: "iberia",
    },
    {
      category: "news",
      title: t("newsTitle02"),
      subtitle: "",
      link: urls.santander,
      imageClass: "santander",
    },
    {
      category: "news",
      title: t("newsTitle03"),
      subtitle: "",
      link: urls.mastercard,
      imageClass: "mastercard",
    },
    {
      category: "news",
      title: t("newsTitle04"),
      subtitle: "",
      link: urls.portAventura,
      imageClass: "portAventura",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title pb30">{t("projectsTitle")}</h2>
      <div className="projects-buttons">
        <a className={`web${activeCategory === "web" ? " active" : ""}`} onClick={() => handleButtonClick("web")}>
          {t("projectsWeb")}
        </a>
        <a className={`news${activeCategory === "news" ? " active" : ""}`} onClick={() => handleButtonClick("news")}>
          {t("projectsNews")}
        </a>
        <a className={`banner${activeCategory === "banner" ? " active" : ""}`} onClick={() => handleButtonClick("banner")}>
          {t("projectsBan")}
        </a>
      </div>
      <div className="projects-container">
        {projectsData
          .filter((project) => project.category === activeCategory || activeCategory === "web")
          .map((project, index) => (
            <a key={index} href={project.link} target="_blank" className={`projects ${project.category}`}>
              <div className={`projects-image ${project.imageClass}`}></div>
              <h3 className="pt20">{project.title}</h3>
              <p>{project.subtitle}</p>
            </a>
          ))}
      </div>
    </section>
  );
};

export default withNamespaces()(Projects);
