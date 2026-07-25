import clients from "../data/clients.json";
import content from "../data/content.json";
import type { Client, ClientsContent } from "../types";
import SectionHeader from "./SectionHeader";

const { sectionTitle, sectionSubtitle } = content.clients as ClientsContent;

function Clients() {
  return (
    <div className="clients-box" id="clients">
      <div className="clients__content">
        <SectionHeader prefix="clients" sectionTitle={sectionTitle} subtitle={sectionSubtitle} />
        <div className="clients__stack">
          {(clients as Client[]).map(({ title, image }) => (
            <div key={image} className="clients__stack--item">
              <img src={image} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
