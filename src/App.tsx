/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

export default function App() {
  // State to hold selected service for auto-prefilling in the Coming Soon form
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (serviceName: string) => {
    // Map nice select values to titles
    if (serviceName.includes("Poetry")) {
      setSelectedService("Poetry & Spoken Word");
    } else if (serviceName.includes("Storytelling")) {
      setSelectedService("Immersive Storytelling");
    } else if (serviceName.includes("Photography")) {
      setSelectedService("Fine Art Photography");
    } else if (serviceName.includes("Videography")) {
      setSelectedService("Cinematic Videography");
    } else if (serviceName.includes("Design")) {
      setSelectedService("High-Concept Graphic Design");
    } else if (serviceName.includes("Branding") || serviceName.includes("Identity")) {
      setSelectedService("Premium Identity & Branding");
    } else {
      setSelectedService("General Inquiry");
    }
  };

  const handleClearSelectedService = () => {
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans antialiased overflow-x-hidden selection:bg-brand-electric/30 selection:text-white">
      {/* Premium Header/Navigation */}
      <Header />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Hero Showcase with Phoenix Emerging from Quill */}
        <Hero />

        {/* Brand Story & Vision Pillars (About & Vision) */}
        <About />

        {/* 6 Requested Creative Services with interactive detail view */}
        <Services onSelectService={handleSelectService} />

        {/* Dynamic visual archives showcase */}
        <Showcase />

        {/* Elegant "Coming Soon" newsletter & inquiry form */}
        <ComingSoon
          selectedService={selectedService}
          onClearSelectedService={handleClearSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
