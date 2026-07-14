/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Compass, Eye } from "lucide-react";
import { BRAND_STORY, VISION_PILLARS } from "../data";

export default function About() {
  // Map icons to the vision pillars based on their index/type
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Book className="w-5 h-5 text-brand-electric" />;
      case 1:
        return <Eye className="w-5 h-5 text-brand-electric" />;
      case 2:
        default:
        return <Compass className="w-5 h-5 text-brand-electric" />;
    }
  };

  return (
    <section
      id="about"
      className="bg-brand-black border-t border-brand-navy/30 py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-ocean/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* About: Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
          
          {/* Header element */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="text-[10px] font-sans tracking-[0.4em] text-brand-electric font-semibold uppercase">
              01 // THE MANIFESTO
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Brand Story
            </h2>
            <div className="w-12 h-[1px] bg-brand-electric"></div>
          </div>

          {/* Core content */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-muted leading-snug max-w-2xl font-light">
              We stand in the intersection of the <span className="text-white font-medium italic">crafted word</span> and the <span className="text-white font-medium italic">visceral shadow</span>.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-muted font-sans text-sm md:text-base font-light leading-relaxed">
              <p>
                {BRAND_STORY.intro}
              </p>
              <p>
                {BRAND_STORY.philosophy}
              </p>
            </div>

            {/* Blockquote decoration */}
            <div className="border-l-2 border-brand-navy bg-brand-midnight/25 p-6 md:p-8">
              <p className="font-serif italic text-lg md:text-xl text-white leading-relaxed font-light">
                "We believe that a story isn't just something you hear; it's an environment you inhabit. We bring light to the deep scripts and texture to the silent shadows."
              </p>
              <span className="block mt-4 font-sans text-xs tracking-wider text-brand-electric uppercase font-bold">
                — Shadows &amp; Scripts Creative Council
              </span>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-brand-navy/30 my-16" id="vision"></div>

        {/* Vision Pillars */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-sans tracking-[0.4em] text-brand-electric font-semibold uppercase">
              02 // THE COGNIZANCE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Our Creative Vision
            </h2>
            <p className="text-brand-muted font-sans font-light text-sm">
              The architectural principles driving every single frame we capture, copy we draft, and narrative we summon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VISION_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="relative bg-brand-midnight/20 border border-brand-navy/30 p-8 hover:border-brand-electric/50 transition-all duration-300 flex flex-col justify-between group h-full"
                id={`vision-pillar-${idx}`}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand-electric transition-colors duration-300"></div>

                <div className="space-y-6">
                  {/* Icon + Title */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand-black border border-brand-navy/30 flex items-center justify-center">
                      {getPillarIcon(idx)}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-sm text-brand-electric/80 pl-4 border-l border-brand-navy/50">
                    "{pillar.quote}"
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-brand-muted font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-navy/30 flex items-center text-[10px] tracking-widest text-brand-dark-muted uppercase font-sans">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
