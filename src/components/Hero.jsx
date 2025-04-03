/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-box">
      <div className="hero__bg">
        <div className="hero__content">
          {/* TITLE */}
          <motion.div className="hero__content--title" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}>
            <h2>
              Hey there, I'm
              <br />
              <span>Jaime Ramis</span>
            </h2>
          </motion.div>
          {/* END TITLE */}
          {/* SUBTITLE */}
          <motion.div className="hero__content--subtitle" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
            <h1>FRONT END DEVELOPER</h1>
          </motion.div>
          {/* END SUBTITLE */}
          {/* TEXT */}
          <motion.div className="hero__content--text" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}>
            <h2>
              And this is
              <br />
              my <span>Web Portfolio</span>
            </h2>
          </motion.div>
          {/* END TEXT */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
