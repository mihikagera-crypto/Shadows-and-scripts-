/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Feather, BookOpen, Camera, Film, Layers, Sparkles, Check } from "lucide-react";
import { CREATIVE_SERVICES } from "../data";

// Type-safe icon mapper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Feather: Feather,
  BookOpen: BookOpen,
  Camera: Camera,
  Film: Film,
  Layers: Layers,
  Sparkles: Sparkles,
};

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(CREATIVE_SERVICES[0].id);

  const activeService = CREATIVE_SERVICES.find((s) => s.id === activeTab) || CREATIVE_SERVICES[0];
  const IconComponent = iconMap[activeService.iconName] || Sparkles;

  const handleInquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const element = document.querySelector("#coming-soon");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="bg-brand-black/95 border-t border-brand-navy/30 py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-electric/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-sans tracking-[0.4em] text-brand-electric font-semibold uppercase">
            03 // THE OFFERINGS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Creative Services
          </h2>
          <div className="w-12 h-[1px] bg-brand-electric mx-auto"></div>
          <p className="text-brand-muted font-sans font-light text-sm pt-2">
            We provide bespoke, art-house execution across text and lens. Explore our core disciplines below.
          </p>
        </div>

        {/* Desktop Interactive Panel */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch min-h-[500px]" id="services-desktop-panel">
          
          {/* Left: Tab Selection */}
          <div className="col-span-5 flex flex-col space-y-3 justify-center">
            {CREATIVE_SERVICES.map((service) => {
              const ServiceIcon = iconMap[service.iconName] || Sparkles;
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-brand-midnight/40 border-brand-electric/50 shadow-lg shadow-brand-electric/5"
                      : "bg-transparent border-brand-navy/30 hover:border-brand-navy/60 hover:bg-brand-midnight/20"
                  }`}
                  id={`service-tab-btn-${service.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 border transition-colors duration-300 ${
                        isActive
                          ? "bg-brand-black border-brand-electric text-brand-electric"
                          : "bg-brand-midnight/50 border-brand-navy/30 text-brand-muted group-hover:text-gray-300"
                      }`}
                    >
                      <ServiceIcon className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                        isActive ? "text-white font-semibold" : "text-brand-muted group-hover:text-gray-200"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                  
                  {/* Subtle Indicator Arrow */}
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-brand-electric scale-125" : "bg-transparent group-hover:bg-brand-navy"
                    }`}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed View */}
          <div className="col-span-7 bg-brand-midnight/20 border border-brand-navy/30 p-10 flex flex-col justify-between relative">
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-electric"></div>

            <div className="space-y-8">
              {/* Icon and Title */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase font-sans">
                    <span>Creative Service Offer</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                    {activeService.title}
                  </h3>
                </div>
                <div className="p-4 bg-brand-black border border-brand-navy/30 text-brand-electric">
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>

              {/* Tagline */}
              <p className="font-serif italic text-lg text-white pl-4 border-l-2 border-brand-navy">
                "{activeService.tagline}"
              </p>

              {/* Description */}
              <p className="font-sans text-sm text-brand-muted font-light leading-relaxed max-w-xl">
                {activeService.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-4">
                <h4 className="font-sans text-xs tracking-wider uppercase text-white font-bold">
                  Bespoke Deliverables:
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeService.deliverables.map((item) => (
                    <div key={item} className="flex items-center space-x-2.5 text-xs text-brand-muted">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-navy/30 flex items-center justify-center text-brand-electric">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-sans font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire Trigger */}
            <div className="mt-8 pt-8 border-t border-brand-navy/30 flex items-center justify-between">
              <span className="text-[10px] font-sans tracking-widest text-brand-dark-muted uppercase">
                Shadows &amp; Scripts Studio Node
              </span>
              <button
                onClick={() => handleInquire(activeService.title)}
                className="px-6 py-3 bg-transparent hover:bg-brand-electric/10 border border-brand-navy hover:border-brand-electric text-brand-electric font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                id={`inquire-btn-${activeService.id}`}
              >
                Inquire &amp; Discuss
              </button>
            </div>

          </div>

        </div>

        {/* Mobile Accordion / Stacked Card View */}
        <div className="lg:hidden flex flex-col space-y-6" id="services-mobile-stack">
          {CREATIVE_SERVICES.map((service) => {
            const ServiceIcon = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-brand-midnight/20 border border-brand-navy/30 p-6 space-y-6"
                id={`service-mobile-card-${service.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-black border border-brand-navy/30 text-brand-electric">
                      <ServiceIcon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="font-serif italic text-sm text-white pl-3 border-l-2 border-brand-navy">
                  "{service.tagline}"
                </p>

                <p className="font-sans text-xs text-brand-muted font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="font-sans text-[10px] tracking-wider uppercase text-white font-bold block">
                    Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center space-x-2 text-xs text-brand-muted">
                        <Check className="w-3 h-3 text-brand-electric" />
                        <span className="font-sans font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full text-center py-3 bg-brand-midnight border border-brand-navy/50 text-[10px] tracking-widest uppercase font-sans font-bold text-brand-electric hover:bg-brand-electric/10 transition-all duration-300 cursor-pointer"
                  id={`inquire-mobile-${service.id}`}
                >
                  Inquire Now
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
