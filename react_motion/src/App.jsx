import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import "./styles.css";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        PortFolio2
      </section>
      <section>
        PortFolio3
      </section>
      <section id="Contact">
        Contact
      </section>
    </div>
  )
};

export default App;
