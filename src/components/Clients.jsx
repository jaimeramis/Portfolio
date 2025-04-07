import clients from "../data/clients.json";

function Clients() {
  return (
    <div className="clients-box" id="clients">
      <div className="clients__content">
        <div className="clients__profile">
          <div className="clients__profile--section">
            <img src="/images/info-icons/icon.svg" alt="Project Icon" />
            <p>Clients</p>
          </div>
          <div className="clients__profile--title">
            <h4>I have work with</h4>
          </div>
        </div>
        <div className="clients__stack">
          {clients.map(({ title, image }, index) => (
            <div key={index} className="clients__stack--item">
              <img src={image} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
