import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

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
