import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <NavBar />
         <Home />
         <Hero />
         <Support />
         <Pricing />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
