/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Lock, ArrowUpRight } from "lucide-react";
import { ComingSoonInquiry } from "../types";

interface ComingSoonProps {
  selectedService: string;
  onClearSelectedService: () => void;
}

export default function ComingSoon({ selectedService, onClearSelectedService }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedInquiries, setSavedInquiries] = useState<ComingSoonInquiry[]>([]);

  // Update interest automatically if user clicks "Inquire" on a specific service
  useEffect(() => {
    if (selectedService) {
      setInterest(selectedService);
    }
  }, [selectedService]);

  // Load existing registrations from localStorage for visual completeness
  useEffect(() => {
    try {
      const stored = localStorage.getItem("shadows_scripts_inquiries");
      if (stored) {
        setSavedInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage lookup failed:", e);
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Minimal elegant validation
    if (!email || !email.includes("@")) {
      setErrorMessage("Please share a valid sanctuary address (email).");
      return;
    }

    setIsSubmitting(true);

    // Simulate elite network registry latency (1 second)
    setTimeout(() => {
      const newInquiry: ComingSoonInquiry = {
        email,
        interest,
        message: message.trim() || undefined,
      };

      const updated = [...savedInquiries, newInquiry];
      setSavedInquiries(updated);

      try {
        localStorage.setItem("shadows_scripts_inquiries", JSON.stringify(updated));
      } catch (err) {
        console.error("Local storage save failed:", err);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail("");
      setMessage("");
      onClearSelectedService();
    }, 1200);
  };

  return (
    <section
      id="coming-soon"
      className="bg-brand-black/98 py-24 px-6 md:px-12 border-t border-brand-navy/30 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-ocean/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] font-sans tracking-[0.4em] text-brand-electric font-semibold uppercase">
              05 // THE HORIZON
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Coming Soon
            </h2>
            <div className="w-12 h-[1px] bg-brand-electric"></div>
            
            <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
              We are quietly drafting our inaugural seasonal anthology and tuning the lens for our official launch in late 2026. 
            </p>
            <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
              Enlist your address today to receive priority access, limited edition visual print logs, and private invitations to our upcoming digital exhibitions.
            </p>

            <div className="pt-4 flex items-center space-x-2 text-[10px] text-brand-dark-muted font-sans tracking-widest uppercase">
              <Lock className="w-3.5 h-3.5 text-brand-electric" />
              <span>We value your silence. No spam.</span>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7" id="coming-soon-form-container">
            <div className="bg-brand-midnight/20 border border-brand-navy/30 p-8 md:p-10 relative">
              
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-electric"></div>

              {submitSuccess ? (
                /* Success Slate */
                <div className="text-center py-8 space-y-6 animate-fade-in" id="success-message">
                  <div className="mx-auto w-12 h-12 bg-brand-ocean/10 border border-brand-electric rounded-full flex items-center justify-center text-brand-electric">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      Your Inscription is Cast
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-muted font-light leading-relaxed max-w-sm mx-auto">
                      Thank you. We have recorded your coordinates in our archive. We will reach out when the shadows align and the scripts are complete.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2.5 bg-brand-midnight border border-brand-navy hover:border-brand-electric text-[10px] tracking-widest uppercase font-sans font-bold text-brand-electric rounded-none hover:bg-brand-electric/10 transition-colors duration-300 cursor-pointer"
                  >
                    Send Another Inscription
                  </button>
                </div>
              ) : (
                /* Registration/Inquiry Form */
                <form onSubmit={handleRegister} className="space-y-6" id="inscription-form">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg text-white font-medium">
                      Inscribe Your Sanctuary
                    </h3>
                    <p className="font-sans text-xs text-brand-dark-muted font-light">
                      Fill out the form below to enter the ledger.
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] tracking-widest uppercase text-brand-muted font-sans font-bold">
                      Sanctuary Address (Email) <span className="text-brand-electric">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="scribe@domain.com"
                      required
                      className="w-full px-4 py-3 bg-brand-black/80 border border-brand-navy/30 focus:border-brand-electric text-white font-sans text-sm rounded-none focus:outline-none transition-colors duration-300 placeholder-brand-dark-muted"
                    />
                  </div>

                  {/* Discipline / Service Select */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] tracking-widest uppercase text-brand-muted font-sans font-bold">
                      Discipline of Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black/85 border border-brand-navy/30 focus:border-brand-electric text-white font-sans text-sm rounded-none focus:outline-none transition-colors duration-300"
                    >
                      <option value="General Inquiry">General Inquiry / Alliance</option>
                      <option value="Poetry & Spoken Word">Poetry &amp; Spoken Word</option>
                      <option value="Immersive Storytelling">Immersive Storytelling</option>
                      <option value="Fine Art Photography">Fine Art Photography</option>
                      <option value="Cinematic Videography">Cinematic Videography</option>
                      <option value="High-Concept Graphic Design">High-Concept Graphic Design</option>
                      <option value="Premium Identity & Branding">Premium Identity &amp; Branding</option>
                    </select>
                  </div>

                  {/* Optional message */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] tracking-widest uppercase text-brand-muted font-sans font-bold">
                      Short Brief or Message <span className="text-brand-dark-muted">(Optional)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What story or shadow wishes to find its wings?"
                      rows={3}
                      className="w-full px-4 py-3 bg-brand-black/80 border border-brand-navy/30 focus:border-brand-electric text-white font-sans text-sm rounded-none focus:outline-none transition-colors duration-300 placeholder-brand-dark-muted resize-none"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-400 font-sans font-medium" id="error-alert">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-ocean hover:bg-brand-ocean/85 text-white font-sans text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 border border-transparent transition-all duration-300 cursor-pointer disabled:opacity-50 shadow-lg shadow-brand-ocean/20"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Inscribing ledger...</span>
                    ) : (
                      <>
                        <span>Submit Inscription</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Saved inscriptions count indicator if any exist */}
              {savedInquiries.length > 0 && (
                <div className="mt-6 pt-4 border-t border-brand-navy/30 flex items-center justify-between text-[9px] font-mono text-brand-dark-muted uppercase">
                  <span>Ledger Registry Status: ONLINE</span>
                  <span className="text-brand-electric">{savedInquiries.length} Initiates Enlisted</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
