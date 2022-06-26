import React from "react";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Prices/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
   return (
      <>
         <NavBar />
         <Home />
         <Hero />
         <About />
         <Pricing />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
