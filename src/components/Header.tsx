/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Brand", href: "#about" },
    { name: "Our Vision", href: "#vision" },
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#showcase" },
    { name: "Enlist", href: "#coming-soon" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-black/90 border-b border-brand-navy/30 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, "#")}
          className="flex items-center space-x-2 group"
          id="brand-logo"
        >
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-wider text-white group-hover:text-brand-electric transition-colors duration-300">
            SHADOWS <span className="text-brand-electric font-sans text-lg">&amp;</span> SCRIPTS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs tracking-widest uppercase font-sans font-medium text-brand-muted hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-electric hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#coming-soon"
            onClick={(e) => handleScrollTo(e, "#coming-soon")}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-transparent border border-brand-navy/60 hover:border-brand-electric text-xs tracking-widest uppercase font-sans font-semibold text-white rounded-none hover:bg-brand-midnight/40 transition-all duration-300 cursor-pointer shadow-sm shadow-brand-midnight/50 hover:shadow-brand-electric/20"
            id="cta-enlist"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-electric animate-pulse" />
            <span>Enlist Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-brand-black/98 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in"
          id="mobile-drawer"
        >
          <div className="flex flex-col items-center space-y-6 w-full px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg tracking-widest uppercase font-serif font-medium text-gray-300 hover:text-brand-electric transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full h-[1px] bg-brand-navy/30 my-2"></div>
            <a
              href="#coming-soon"
              onClick={(e) => handleScrollTo(e, "#coming-soon")}
              className="w-full text-center py-4 bg-brand-midnight border border-brand-navy/60 hover:border-brand-electric text-xs tracking-widest uppercase font-sans font-bold text-white rounded-none hover:bg-brand-electric/10 transition-all duration-300"
            >
              Enlist Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
