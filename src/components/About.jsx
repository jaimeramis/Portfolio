function About() {
  return (
    <div className="about-box" id="about">
      <div className="about__content">
        <div className="about__profile">
          <div className="about__profile--section">
            <img src="/images/info-icons/icon.svg" />
            <p>About me</p>
          </div>
          <div className="about__profile--title">
            <h4>
              The fusion between creativity and technology.
              <br />
              With the aim of obtaining innovative solutions in all my projects.
            </h4>
          </div>
          <div className="about__profile--text">
            <p>
              I am passionate about topics such as video games, movies and series trying to use them as a motivator when I do a more personal project. I am very sociable and communicative and I am
              able to adapt quickly to new processes and equipment. I leave you my <b>Social Media</b> below:
            </p>
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="about__media">
          <div className="about__social__media">
            <div className="about__social__media--item">
              <a href="https://github.com/jaimeramis" target="_blank">
                <img src="/images/social-icons/github.svg" alt="Github" />
              </a>
            </div>
            <div className="about__social__media--item">
              <a href="https://www.linkedin.com/in/jaimeramisbarber/" target="_blank">
                <img src="/images/social-icons/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        {/* END SOCIAL MEDIA*/}
      </div>
    </div>
  );
}

export default About;
