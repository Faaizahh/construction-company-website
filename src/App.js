import "./App.css";
import About from "./Components/About/About";
import CardWrapper from "./Components/Card wrapper/CardWrapper";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Title from "./Components/Title/Title";
import Values from "./Components/Values/Values";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container-2">
        <Title
          title="Services"
          subtitle="From Vision to Structure, We Make It Happen."
        />
        <CardWrapper />
      </div>
      <About />
      <Values />
      <Title title="Showcase" subtitle="Our Projects" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
