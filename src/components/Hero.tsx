import { motion } from "framer-motion";
import content from "../data/content.json";
import type { HeroContent } from "../types";

const hero = content.hero as HeroContent;

function Hero() {
  return (
    <div className="hero-box">
      <div className="hero__bg">
        <div className="hero__content">
          <motion.div className="hero__content--subtitle" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
            <h1>{hero.subtitle}</h1>
          </motion.div>
          <motion.div className="hero__content--title" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}>
            <h2>
              {hero.greetingLine1}
              <br />
              <span>{hero.greetingName}</span>
            </h2>
          </motion.div>
          <motion.div className="hero__content--text" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}>
            <h2>
              {hero.textLine1}
              <br />
              {hero.textPrefix} <span>{hero.textHighlight}</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
