"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Zap, Globe, Code, Palette, ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

import Tools from './components/root/Tools';
import About from './components/root/About';
import Contact from './components/root/Contact';
import Footer from './components/root/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="">
            <Link href="/">
              <img className='h-[4rem]' src="./dev-center-logo-white.png" alt="Dev Center Logo" />
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#tools" className="text-gray-300 hover:text-white transition-colors">Tools</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-lg z-40 p-6 md:hidden">
          <div className="space-y-4">
            <a href="#tools" className="block text-gray-300 hover:text-white transition-colors">Tools</a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">Micro SaaS Collection</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Build. Ship.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#EEB30D] to-[#A57B08] bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A curated collection of powerful micro SaaS tools designed to supercharge your productivity and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tools">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Explore Tools
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="#about">
              <button className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <Tools />

      {/* About Section  */}
      <About />

      {/* CTA Section */}
      <section className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to boost your productivity?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join thousands of creators and developers who trust our tools to streamline their workflow.
            </p>
            <button className="bg-gradient-to-r from-[#EEB30D] to-[#A57B08] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#A57B08] hover:to-[#EEB30D] transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}