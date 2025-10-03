"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Zap, Globe, Code, Palette, ArrowUpRight, Menu, X } from 'lucide-react';

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

  const tools = [
    {
      name: "Inspire & Share",
      slug: "inspire-and-share",
      description: "Generate engaging social media captions and inspirational quotes with AI-powered creativity",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      features: ["AI Caption Generator", "Quote Creation", "Social Media Ready", "Mobile Optimized"],
      status: "Live"
    },
    {
      name: "Code Snippet Manager",
      slug: "code-snippets",
      description: "Organize, share and discover code snippets across multiple programming languages",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      features: ["Multi-language Support", "Syntax Highlighting", "Team Sharing", "Search & Filter"],
      status: "Beta"
    },
    {
      name: "Color Palette Pro",
      slug: "color-palette",
      description: "Create, customize and export beautiful color palettes for your design projects",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-orange-500 via-rose-500 to-pink-500",
      features: ["Palette Generator", "Export Options", "Accessibility Check", "Color Harmony"],
      status: "Coming Soon"
    },
    {
      name: "Quick Deploy",
      slug: "quick-deploy",
      description: "Deploy your projects instantly with one-click deployment to multiple platforms",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      features: ["One-click Deploy", "Multi-platform", "CI/CD Integration", "Real-time Logs"],
      status: "Coming Soon"
    }
  ];

  const handleToolClick = (slug: string) => {
    // window.location.href = `https://tools.devcenter.in/${slug}`;
    window.location.href = `http://localhost:3000//${slug}`;
  };

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
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DevCenter
            </h1>
            <p className="text-xs text-gray-400">Tools & Solutions</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#tools" className="text-gray-300 hover:text-white transition-colors">Tools</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
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
            <button className="w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </button>
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A curated collection of powerful micro SaaS tools designed to supercharge your productivity and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Explore Tools
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Tools
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our growing collection of specialized tools, each designed to solve specific challenges and boost your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div
                key={tool.slug}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                onClick={() => handleToolClick(tool.slug)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    tool.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : tool.status === 'Beta'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {tool.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(tool.icon, { className: "w-8 h-8 text-white" })}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {tool.name}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-white font-semibold group-hover:text-purple-400 transition-colors">
                  {tool.status === 'Live' ? 'Try Now' : tool.status === 'Beta' ? 'Join Beta' : 'Coming Soon'}
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">DevCenter Tools</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 DevCenter Tools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}