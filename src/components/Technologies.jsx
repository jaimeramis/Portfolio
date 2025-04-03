import tech from "../data/technology.json";

function Technologies() {
  return (
    <div className="technology-box" id="technologies">
      <div className="technology__profile">
        <div className="technology__profile--section">
          <img src="/images/info-icons/icon.svg" alt="Project Icon" />
          <p>Technological Stack</p>
        </div>
        <div className="technology__profile--title">
          <h4>Actual Profiency</h4>
        </div>
      </div>
      <div className="technology__stack">
        {tech.map(({ title, image }, index) => (
          <div key={index} className="technology__stack--item">
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
