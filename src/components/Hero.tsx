/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, Sparkles } from "lucide-react";
import { BRAND_STORY } from "../data";

const phoenixHeroImg = new URL("../assets/images/phoenix_quill_hero_1783996762112.jpg", import.meta.url).href;

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-brand-black via-brand-midnight to-brand-black flex flex-col justify-center items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden border-b border-brand-navy/30"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-ocean/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-electric/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      {/* Abstract Phoenix/Quill SVG Visual from Artistic Flair */}
      <div className="absolute right-0 top-1/4 opacity-25 pointer-events-none select-none z-0 hidden lg:block">
        <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M200 480C200 480 190 350 200 300C210 250 260 200 300 150C340 100 320 20 200 20C80 20 60 100 100 150C140 200 190 250 200 300"
            stroke="#00C2FF"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <path d="M200 300L220 180M200 300L180 180M200 300L250 220M200 300L150 220" stroke="#007BFF" strokeWidth="0.5" />
          <circle cx="200" cy="20" r="80" fill="url(#paint0_radial)" fillOpacity="0.2" />
          <defs>
            <radialGradient id="paint0_radial" cx="200" cy="20" r="80" fx="200" fy="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C2FF" />
              <stop offset="1" stopColor="#020205" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">
        
        {/* Left Column - Copy & Philosophy */}
        <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1 text-left">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-3 text-brand-electric tracking-[0.4em] text-[10px] font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse"></span>
              <span>{BRAND_STORY.subtitle}</span>
            </div>
            <div className="h-[1px] w-12 bg-brand-electric"></div>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl xl:text-8xl leading-tight text-white italic font-light">
              Where Ink <br/>Finds <span className="text-brand-electric">Wings.</span>
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-brand-muted tracking-wide font-light border-l-2 border-brand-navy pl-6 py-0.5">
              "{BRAND_STORY.headline}"
            </p>
          </div>

          <p className="font-sans text-sm md:text-base text-brand-muted font-light leading-relaxed max-w-xl">
            {BRAND_STORY.intro}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleScrollTo("#services")}
              className="px-8 py-4 bg-brand-ocean text-white font-sans text-xs font-bold tracking-widest uppercase hover:bg-brand-ocean/85 hover:text-brand-electric transition-all duration-300 shadow-lg shadow-brand-ocean/25 border border-transparent cursor-pointer"
              id="hero-cta-services"
            >
              Explore Services
            </button>
            <button
              onClick={() => handleScrollTo("#about")}
              className="px-8 py-4 bg-transparent border border-brand-navy/60 text-brand-muted font-sans text-xs font-bold tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300 cursor-pointer"
              id="hero-cta-philosophy"
            >
              Our Philosophy
            </button>
          </div>
          
        </div>

        {/* Right Column - Premium Frame Showcase */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group w-full max-w-md lg:max-w-none">
            {/* Ambient Background Glow on Image Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-ocean to-brand-electric rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-500"></div>
            
            {/* Image Outer Frame */}
            <div className="relative bg-brand-midnight/90 border border-brand-navy/30 p-3 shadow-2xl">
              
              {/* Inner container */}
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-black">
                <img
                  src={phoenixHeroImg}
                  alt="A majestic glowing phoenix emerging dynamically from the tip of a vintage black quill"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="hero-featured-image"
                />
              </div>

              {/* Minimal caption details below the frame */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-sans tracking-widest text-brand-dark-muted uppercase">
                <span>PLATE I: THE FLIGHT OF THE QUILL</span>
                <span className="flex items-center text-brand-electric">
                  <Sparkles className="w-3 h-3 mr-1" /> ACTIVE EMERGENCE
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Scroll indicator */}
      <div className="absolute bottom-6 flex flex-col items-center space-y-2 z-10">
        <span className="text-[9px] tracking-[0.4em] uppercase text-brand-muted font-sans">
          Descend Into Shadows
        </span>
        <button
          onClick={() => handleScrollTo("#about")}
          className="text-brand-muted hover:text-brand-electric transition-colors duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll to About"
          id="scroll-down-btn"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
