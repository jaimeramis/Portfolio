import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import content from "./data/content.json";
import type { AppContent } from "./types";

const { skipLink } = content.app as AppContent;

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        {skipLink}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Clients />
      </main>
      <Footer />
    </>
  );
}

export default App;
