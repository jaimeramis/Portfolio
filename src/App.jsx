import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Clients from "./components/clients";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
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
