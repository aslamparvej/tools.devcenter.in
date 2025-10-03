"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Globe, Sparkles, Quote, Share2, Zap, Star, Users, CheckCircle, Play, ArrowRight, Smartphone, Brain, Target, Palette, Download, Copy, Heart, MessageSquare, Hash, Wand2, RefreshCw, Send } from 'lucide-react';

export default function InspireSharePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('captions');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Generation",
      description: "Advanced AI algorithms create unique, engaging content tailored to your style and audience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Quote className="w-8 h-8" />,
      title: "Quote Creation",
      description: "Generate inspirational quotes, motivational messages, and thought-provoking content instantly.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Ready",
      description: "Content optimized for Instagram, Twitter, LinkedIn, Facebook, and other platforms.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimized",
      description: "Perfect mobile experience with responsive design and touch-friendly interface.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Hashtag Suggestions",
      description: "Get relevant hashtags automatically generated to maximize your reach and engagement.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Customizable Styles",
      description: "Multiple tone options from professional to casual, formal to friendly.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: "Inspire & Share has transformed my content creation process. I save hours every week and my engagement has increased by 40%!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Social Media Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "The AI-generated captions are incredibly creative and always on-brand. This tool is a game-changer for our social media strategy.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Influencer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "I love how easy it is to generate quotes that resonate with my audience. The mobile app is perfect for creating content on the go.",
      rating: 5
    }
  ];

  const demoContent = {
    captions: [
      "✨ Turning dreams into reality, one step at a time. What's your next big move? #DreamBig #Motivation #Success",
      "🌟 Life is too short for ordinary moments. Make every day count and create memories that last forever! #LiveFully #Inspiration",
      "💪 The only impossible journey is the one you never begin. Start today, start now! #JustStart #MotivationMonday"
    ],
    quotes: [
      "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill",
      "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
      "\"Don't watch the clock; do what it does. Keep going.\" - Sam Levenson"
    ]
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const content = activeTab === 'captions' ? demoContent.captions : demoContent.quotes;
      const randomContent = content[Math.floor(Math.random() * content.length)];
      setGeneratedContent(randomContent);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
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
          className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-8 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/captify-icon.png"
              alt="My profile picture"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Captify
            </h1>
            <p className="text-xs text-gray-400">AI Content Creator</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/tools" className="text-gray-300 hover:text-white transition-colors">Tools</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-300">AI-Powered Content Creation</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Create Engaging
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Social Content
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                Generate captivating social media captions and inspirational quotes with AI. Save time, boost engagement, and never run out of content ideas.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    1M+
                  </div>
                  <div className="text-sm text-gray-400">Captions Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-sm text-gray-400">User Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Creating Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Demo Interface */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab('captions')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'captions'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                  >
                    Captions
                  </button>
                  <button
                    onClick={() => setActiveTab('quotes')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'quotes'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                  >
                    Quotes
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    {activeTab === 'captions' ? 'Caption Style' : 'Quote Category'}
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors">
                    {activeTab === 'captions' ? (
                      <>
                        <option value="motivational">Motivational</option>
                        <option value="casual">Casual</option>
                        <option value="professional">Professional</option>
                      </>
                    ) : (
                      <>
                        <option value="inspiration">Inspiration</option>
                        <option value="success">Success</option>
                        <option value="life">Life Wisdom</option>
                      </>
                    )}
                  </select>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mb-6"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Generate {activeTab === 'captions' ? 'Caption' : 'Quote'}
                    </>
                  )}
                </button>

                {generatedContent && (
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <p className="text-gray-100 mb-4 leading-relaxed">
                      {generatedContent}
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={copyToClipboard}
                        className="flex-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </button>
                      <button className="flex-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to create engaging social media content and inspire your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Loved by Creators
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              See what our users are saying about Inspire & Share
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to transform your content?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using Inspire & Share to boost their social media engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">Inspire & Share</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="/tools" className="hover:text-white transition-colors">All Tools</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Inspire & Share. Part of DevCenter Tools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}