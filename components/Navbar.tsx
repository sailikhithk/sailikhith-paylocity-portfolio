"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Sparkles,
  Sun,
  Moon,
  Layers,
  Cpu,
  Activity,
  Code2,
  Award,
  Compass,
  Menu,
  X,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Simulator", href: "#simulator", icon: Activity },
    { name: "3-Tier HLD", href: "#architecture", icon: Layers },
    { name: "Type-Safe LLD", href: "#lld", icon: Cpu },
    { name: "DSA & SQL", href: "#dsa", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Award },
    { name: "Values", href: "#values", icon: Compass },
    { name: "30-60-90", href: "#roadmap", icon: Calendar },
    { name: "Multiplier", href: "#multiplier-impact", icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#070D18]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo / Brand with Profile Picture */}
        <a href="#" className="flex items-center space-x-3 shrink-0 group">
          <div className="relative shrink-0">
            <img
              src="/profile_photo.jpg"
              alt="Sai Likhith Kanuparthi"
              className="w-10 h-10 rounded-xl object-cover border-2 border-orange-500/60 shadow-md shadow-orange-500/20 group-hover:border-orange-400 transition-colors"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#070D18]"
              title="Verified Candidate Ready to Interview"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg tracking-tight text-slate-900 dark:text-white whitespace-nowrap group-hover:text-orange-500 transition-colors">
                Sai Likhith Kanuparthi
              </span>
              <span className="hidden 2xl:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 whitespace-nowrap">
                Senior MLE
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-wide hidden sm:block whitespace-nowrap truncate max-w-[200px] md:max-w-[320px] lg:max-w-none">
              Paylocity · Ignite AI & ML Platform
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 px-2 py-1.5 2xl:px-2.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Contact */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all"
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-orange-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href="https://github.com/sailikhithk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-orange-500/40 hover:text-orange-500 transition-all"
          >
            GitHub
          </a>

          <a
            href="mailto:sailikhithcse@gmail.com"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md shadow-orange-500/20 transition-all shrink-0"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 xl:hidden rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#070D18] border-b border-slate-200 dark:border-slate-800 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-orange-500"
              >
                <Icon className="w-4 h-4 text-orange-500" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
