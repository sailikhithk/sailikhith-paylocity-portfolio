"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050912] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand / Bio */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative shrink-0">
                <img
                  src="/profile_photo.jpg"
                  alt="Sai Likhith Kanuparthi"
                  className="w-9 h-9 rounded-xl object-cover border border-orange-500/50 shadow-md"
                />
              </div>
              <span className="font-bold text-white text-base">Sai Likhith Kanuparthi</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Senior Software Engineer & AI Systems Architect with 7+ years of experience architecting
              high-throughput multi-tenant streaming platforms, Databricks Delta Lake lakehouses, and
              agentic GenAI tooling.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Engineered for Paylocity · Ignite AI & Emerging Tech Platforms
            </div>
          </div>

          {/* Canonical Contact Info */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-end gap-6 text-xs">
            <div className="space-y-2">
              <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block">
                Direct Contact
              </span>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <a href="mailto:sailikhithcse@gmail.com" className="hover:text-orange-400">
                  sailikhithcse@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <a href="tel:+18606204718" className="hover:text-orange-400">
                  +1 (860) 620-4718
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Houston, TX (Open to Relocation)</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block">
                Profiles & Portfolio
              </span>
              <div className="flex items-center space-x-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                <a
                  href="https://sailikhith.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  sailikhith.me
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Linkedin className="w-3.5 h-3.5 text-orange-400" />
                <a
                  href="https://linkedin.com/in/sailikhithk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  linkedin.com/in/sailikhithk
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Github className="w-3.5 h-3.5 text-orange-400" />
                <a
                  href="https://github.com/sailikhithk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  github.com/sailikhithk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sai Likhith Kanuparthi · All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-orange-500/40 transition-all text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 text-orange-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
