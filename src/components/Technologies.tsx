import tech from "../data/technology.json";
import content from "../data/content.json";
import type { Tech, TechnologiesContent } from "../types";
import SectionHeader from "./SectionHeader";

const { sectionTitle, sectionSubtitle } = content.technologies as TechnologiesContent;

function Technologies() {
  return (
    <div className="technology-box" id="technologies">
      <SectionHeader prefix="technology" sectionTitle={sectionTitle} subtitle={sectionSubtitle} />
      <div className="technology__stack">
        {(tech as Tech[]).map(({ title, image }) => (
          <div key={title} className="technology__stack--item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
