import { withNamespaces } from "react-i18next";
import urls from "../data/urls.json";

function About({ t }) {
  return (
    <section id="about" className="portfolio__intro_container">
      <div className="portfolio__intro_info">
        <h1 className="pb30">{t("aboutTitle")}</h1>
        <h3>{t("aboutSubtitle")}</h3>
        <p>{t("aboutText")}</p>
        <div className="portfolio__intro_profiles">
          <a href={urls.trailhead} target="_blank">
            <img src="/images/trailhead_logo.png" alt="TrailHead" />
          </a>
          <a href={urls.linkedln} target="_blank">
            <img src="/images/linkdln_logo.png" alt="Linkedln" />
          </a>
        </div>
      </div>
      <div className="portfolio__intro_image"></div>
    </section>
  );
}

export default withNamespaces()(About);
