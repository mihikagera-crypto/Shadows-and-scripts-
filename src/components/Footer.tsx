/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Instagram, Twitter, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className="bg-brand-black border-t border-brand-navy/30 py-16 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        
        {/* Left: Brand Initials & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <span className="font-serif text-lg font-semibold tracking-widest text-white">
            SHADOWS <span className="text-brand-electric font-sans text-sm">&amp;</span> SCRIPTS
          </span>
          <p className="font-sans text-[11px] text-brand-dark-muted font-light tracking-wide text-center md:text-left">
            &copy; {currentYear} Shadows &amp; Scripts Creative Studio. All stories reserved.
          </p>
        </div>

        {/* Center: Social/Archive links */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-brand-muted hover:text-brand-electric transition-colors duration-300"
            aria-label="Instagram Link"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-brand-muted hover:text-brand-electric transition-colors duration-300"
            aria-label="Twitter Link"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-brand-muted hover:text-brand-electric transition-colors duration-300"
            aria-label="Github Link"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-1 text-[9px] font-sans tracking-widest text-brand-dark-muted uppercase">
            <Sparkles className="w-3 h-3 text-brand-electric animate-pulse" />
            <span>Where Ink Finds Wings</span>
          </div>
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-brand-midnight/40 border border-brand-navy/30 hover:border-brand-electric text-brand-muted hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
            id="scroll-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
