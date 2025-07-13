import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
