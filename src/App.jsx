import "../src/scss/style.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
