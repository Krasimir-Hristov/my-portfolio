import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Educations,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Certificates from "./components/Certificates";

const App = () => {
  const API = import.meta.env.VITE_API;
  const SERVER = import.meta.env.VITE_SERVER;
  const TEMPLATE = import.meta.env.VITE_TEMPLATE;

  const env = {
    API,
    SERVER,
    TEMPLATE,
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Educations />
        <Certificates />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact env={env} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
