/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Flame } from "lucide-react";
import { ARTISTIC_WORKS } from "../data";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="bg-brand-black py-24 px-6 md:px-12 border-t border-brand-navy/30 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-ocean/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <span className="text-[10px] font-sans tracking-[0.4em] text-brand-electric font-semibold uppercase">
              04 // THE ARCHIVES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Works
            </h2>
            <div className="w-12 h-[1px] bg-brand-electric"></div>
          </div>
          <p className="text-brand-muted font-sans font-light text-sm max-w-sm md:text-right leading-relaxed">
            A small window into the visual landscapes and narratives that have emerged from our midnight laboratory.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="showcase-gallery">
          {ARTISTIC_WORKS.map((work, index) => (
            <div
              key={work.title}
              className="bg-brand-midnight/20 border border-brand-navy/30 hover:border-brand-electric/50 transition-all duration-500 flex flex-col group overflow-hidden shadow-lg shadow-black/60"
              id={`showcase-card-${index}`}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden aspect-[4/3] bg-brand-black">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80"></div>
                
                {/* Year Indicator Top-Right */}
                <div className="absolute top-4 right-4 bg-brand-black/80 border border-brand-navy/30 px-2.5 py-1 text-[9px] font-sans font-semibold text-brand-electric tracking-widest">
                  {work.year}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.2em] text-brand-electric uppercase font-sans font-medium">
                    {work.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-brand-electric transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>

                {/* Subtle Action Prompt */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-navy/30 text-[10px] tracking-widest text-brand-dark-muted uppercase font-sans">
                  <span className="flex items-center text-brand-ocean group-hover:text-brand-electric transition-colors duration-300">
                    <Flame className="w-3.5 h-3.5 mr-1" /> Archived Log
                  </span>
                  <span className="group-hover:text-brand-electric text-brand-muted transition-colors duration-300 flex items-center">
                    Inquire <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Studio Vision Accent */}
        <div className="mt-16 text-center">
          <p className="font-serif italic text-lg text-brand-muted font-light">
            "Art is the trace of a shadow captured in ink."
          </p>
        </div>

      </div>
    </section>
  );
}
