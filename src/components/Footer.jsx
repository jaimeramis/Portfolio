import { withNamespaces } from "react-i18next";
import urls from "../data/urls.json";

function Footer({ t }) {
  return (
    <>
      <footer id="contact">
        <div className="footer_social">
          <h2>{t("footerSubtitle01")}</h2>
          <div className="footer_social_icons">
            <a href={urls.trailhead} rel="noreferrer" target="_blank">
              <img src="/images/trailhead_logo.png" alt="TrailHead" />
            </a>
            <a href={urls.linkedln} rel="noreferrer" target="_blank">
              <img src="/images/linkdln_logo.png" alt="Linkedln" />
            </a>
            <a href={urls.github} rel="noreferrer" target="_blank">
              <img src="/images/github_logo.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="footer_contact">
          <h2>{t("footerSubtitle02")}</h2>
          <p>Email: jaime.ramis1995@gmail.com</p>
          <p>Tlf: +34 660 80 39 71</p>
        </div>
      </footer>
      <p className="textCenter small-xs">© 2023. Jaime Ramis Barber</p>
    </>
  );
}

export default withNamespaces()(Footer);
