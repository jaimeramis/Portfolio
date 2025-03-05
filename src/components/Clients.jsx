import { withNamespaces } from "react-i18next";
import { clientsList } from "../data/Clients";

function Clients({ t }) {
  const listingClients = clientsList.map((clientsList) => <img key={clientsList.id} className={clientsList.class} src={clientsList.image} alt={clientsList.name} />);

  return (
    <section id="brand" className="section-container">
      <h2 className="section-title">{t("clientsTitle")}</h2>
      <div className="clients-brands">{listingClients}</div>
    </section>
  );
}

export default withNamespaces()(Clients);
