import React from "react";
import { FaAtom, FaAward, FaGear } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { withNamespaces } from "react-i18next";

const SkillCard = ({ title, icon, items, t }) => (
  <div className="card-item">
    <div className="card-title">
      <h3>{t(title)}</h3>
      {icon}
    </div>
    <div className="card-content">
      {items.map((item, index) => (
        <p key={index}>{t(item)}</p>
      ))}
    </div>
  </div>
);

function Skills({ t }) {
  const skillsData = [
    { title: "accordeonTitle01", icon: <FaAtom />, items: ["programingItem01", "programingItem02", "programingItem03", "programingItem04", "programingItem05"] },
    { title: "accordeonTitle02", icon: <CgFigma />, items: ["designItem01", "designItem02", "designItem03"] },
    { title: "accordeonTitle03", icon: <FaGear />, items: ["skillsItem01", "skillsItem02", "skillsItem03", "skillsItem04", "skillsItem05"] },
    { title: "accordeonTitle04", icon: <FaAward />, items: ["certItem01", "certItem02", "certItem03"] },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title pb30">{t("skillsTitle")}</h2>
      <div className="cards-container">
        {skillsData.map((data, index) => (
          <SkillCard key={index} {...data} t={t} />
        ))}
      </div>
    </section>
  );
}

export default withNamespaces()(Skills);
