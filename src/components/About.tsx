import content from "../data/content.json";
import type { AboutContent } from "../types";
import SectionHeader from "./SectionHeader";

const about = content.about as AboutContent;

function About() {
  return (
    <div className="about-box" id="about">
      <div className="about__content">
        <SectionHeader prefix="about" sectionTitle={about.sectionTitle} subtitleHtml={about.title} />
        <div className="about__profile--text">
          <p dangerouslySetInnerHTML={{ __html: about.text }} />
        </div>
        <div className="about__media">
          <div className="about__social__media">
            {about.socialLinks.map(({ alt, url, icon }) => (
              <div key={url} className="about__social__media--item">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={icon} alt={alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;