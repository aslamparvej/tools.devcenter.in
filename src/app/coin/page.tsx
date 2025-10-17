"use client";

import React, { useState, useEffect } from 'react';
import { Coffee, TrendingDown, Sparkles, Zap, ArrowRight, Menu, X, Check, Bell, Shield, Smartphone, BarChart3, Brain, Users, Target, Calendar, DollarSign, Gift } from 'lucide-react';

export default function CoinTrackLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [countdownDays, setCountdownDays] = useState(45);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const expenses = [
    { item: 'Coffee', amount: '₹150', time: '2h ago', color: 'bg-amber-500' },
    { item: 'Cab', amount: '₹180', time: '5h ago', color: 'bg-blue-500' },
    { item: 'Snack', amount: '₹80', time: '1d ago', color: 'bg-green-500' },
  ];

  const stats = [
    { value: '50K+', label: 'Waitlist Users', icon: Users },
    { value: '₹2.4Cr', label: 'Projected Savings', icon: DollarSign },
    { value: '4.9★', label: 'Beta Rating', icon: Sparkles },
    { value: '85%', label: 'Habit Change Rate', icon: Target }
  ];

  const benefits = [
    {
      icon: Bell,
      title: 'Early Access Launch',
      desc: 'Be among the first 10,000 users to experience CoinTrack before public launch',
      badge: 'Limited Spots'
    },
    {
      icon: Gift,
      title: 'Lifetime Pro Features',
      desc: 'Get 3 months of Pro features absolutely free as an early adopter',
      badge: 'Worth ₹297'
    },
    {
      icon: Users,
      title: 'Exclusive Community',
      desc: 'Join our founder circle and help shape the future of expense tracking',
      badge: 'VIP Access'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      desc: 'Direct access to our support team with response times under 2 hours',
      badge: 'Premium'
    }
  ];

  const detailedFeatures = [
    {
      icon: Zap,
      title: 'Lightning-Fast Logging',
      desc: 'Log expenses in under 3 seconds with our revolutionary swipe interface',
      details: [
        'Smart voice recognition for hands-free logging',
        'Auto-categorization using AI',
        'Recurring expense templates',
        'Quick-add widgets for your home screen'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      desc: 'Get personalized recommendations that actually help you save money',
      details: [
        'Predict monthly spending patterns',
        'Identify hidden money drains',
        'Suggest optimal saving strategies',
        'Real-time habit alerts'
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingDown,
      title: 'Habit Pattern Recognition',
      desc: 'Automatically link expenses to habits and see the bigger picture',
      details: [
        'Track frequency of recurring expenses',
        'Visual habit timelines',
        'Compare with similar users',
        'Set habit-breaking goals'
      ],
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Visual Analytics',
      desc: 'Beautiful charts and graphs that make your spending crystal clear',
      details: [
        'Interactive spending heatmaps',
        'Category-wise breakdowns',
        'Monthly comparison reports',
        'Export data in multiple formats'
      ],
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      desc: 'Your financial data is encrypted and protected with military-grade security',
      details: [
        '256-bit AES encryption',
        'Biometric authentication',
        'No data sharing with third parties',
        'Regular security audits'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Sync',
      desc: 'Access your data anywhere, anytime across all your devices',
      details: [
        'Real-time cloud synchronization',
        'Offline mode support',
        'Web, iOS, and Android apps',
        'Smart watch integration'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'PS',
      text: 'I saved ₹8,400 in just 2 months by cutting down on unnecessary coffee runs. CoinTrack made me realize I was spending ₹4,200/month on coffee alone!',
      savings: '₹8,400'
    },
    {
      name: 'Rahul Mehta',
      role: 'Marketing Manager',
      image: 'RM',
      text: 'The AI insights are incredible. It told me I could save ₹15,000/year by cooking lunch 3 days a week instead of ordering out. Game changer!',
      savings: '₹15,000'
    },
    {
      name: 'Anjali Patel',
      role: 'Student',
      image: 'AP',
      text: 'As a student, every rupee counts. CoinTrack helped me track my chai and snack expenses. I save ₹3,000/month now!',
      savings: '₹3,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CoinTrack
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#how" className="hover:text-purple-400 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-purple-400 transition">Reviews</a>
            <a href="#preregister" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              Join Waitlist
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-white/10 p-6">
            <div className="flex flex-col gap-4">
              <a href="#features" className="hover:text-purple-400 transition">Features</a>
              <a href="#how" className="hover:text-purple-400 transition">How It Works</a>
              <a href="#testimonials" className="hover:text-purple-400 transition">Reviews</a>
              <a href="#preregister" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Launch Countdown Banner */}
      <div className="relative z-40 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Early Access Launch in {countdownDays} Days</span>
            <span className="hidden sm:inline text-white/80">•</span>
            <span className="text-sm text-white/90">Limited to first 10,000 users</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6 animate-pulse">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">50,000+ People Already Waiting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Losing
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Track Small
              </span>
              <span className="block text-4xl md:text-5xl mt-2">Save Big</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Your daily coffee, cab rides, and snacks add up to <span className="text-purple-400 font-bold">₹15,000 - ₹25,000 every month</span>. 
              CoinTrack uses AI to help you see patterns, break expensive habits, and save effortlessly.
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-purple-300 mb-2">Real Example:</div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    "I drink 5 coffees weekly @ ₹150 each = <span className="text-purple-400 font-bold">₹3,000/month</span>. 
                    If I skip just 2 coffees/week, I&apos;ll save <span className="text-cyan-400 font-bold">₹14,400/year</span>!"
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#preregister" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                Get Early Access Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-8 py-4 rounded-full border-2 border-white/20 hover:bg-white/10 transition">
                Watch Demo (2 min)
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-2">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated Phone Mockup */}
          <div className="relative" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-50"></div>
              
              <div className="relative bg-slate-900 rounded-[3rem] p-4 border-8 border-slate-800 shadow-2xl">
                <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-sm text-slate-400">Today&apos;s Total</div>
                        <div className="text-3xl font-bold">₹410</div>
                        <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                          <TrendingDown className="w-3 h-3" />
                          35% less than usual
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {expenses.map((exp, i) => (
                        <div 
                          key={i}
                          className="bg-slate-900/50 rounded-2xl p-4 backdrop-blur-sm border border-white/5 transform transition hover:scale-105"
                          style={{ 
                            animation: `slideIn 0.5s ease-out ${i * 0.1}s both`,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full ${exp.color} flex items-center justify-center`}>
                                <Coffee className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-semibold">{exp.item}</div>
                                <div className="text-xs text-slate-400">{exp.time}</div>
                              </div>
                            </div>
                            <div className="text-lg font-bold">{exp.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div className="text-sm">
                          <div className="font-semibold text-purple-300 mb-1">💡 AI Insight</div>
                          <div className="text-slate-300">
                            You&apos;ve had 4 coffees this week. Skip 3 next week and save <span className="text-cyan-400 font-bold">₹1,800/month</span>!
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-purple-400">12</div>
                        <div className="text-xs text-slate-400">This Week</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-cyan-400">₹1.2K</div>
                        <div className="text-xs text-slate-400">Saved</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-green-400">-28%</div>
                        <div className="text-xs text-slate-400">vs Last</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <Gift className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Exclusive Early Access Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Join the
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Waitlist?</span>
          </h2>
          <p className="text-xl text-slate-400">Be part of the financial revolution before everyone else</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition"></div>
                <div className="relative p-6 rounded-3xl bg-slate-900/90 border border-white/10 h-full backdrop-blur-sm">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                      {benefit.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Features */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features,
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Simple Experience</span>
          </h2>
          <p className="text-xl text-slate-400">Everything you need to take control of your finances</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i}
                className="group p-8 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-slate-400">From expense to insight in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              step: '01', 
              title: 'Log Expenses Instantly', 
              desc: 'Swipe and tap to log your daily expenses in under 3 seconds. Voice logging and auto-categorization make it effortless.',
              details: ['Voice recognition', 'Smart categorization', 'Quick add widget']
            },
            { 
              step: '02', 
              title: 'AI Analyzes Patterns', 
              desc: 'Our AI automatically identifies your spending habits, recurring expenses, and potential savings opportunities.',
              details: ['Pattern recognition', 'Habit linking', 'Anomaly detection']
            },
            { 
              step: '03', 
              title: 'Get Actionable Insights', 
              desc: 'Receive personalized recommendations on how to cut back and save thousands every month with minimal effort.',
              details: ['Custom strategies', 'Goal tracking', 'Progress reports']
            }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-8xl font-bold text-transparent bg-gradient-to-br from-purple-500/20 to-cyan-500/20 bg-clip-text mb-4">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    {detail}
                  </li>
                ))}
              </ul>
              {i < 2 && (
                <ArrowRight className="hidden lg:block absolute top-12 -right-4 w-8 h-8 text-purple-500/50" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real People,
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Real Savings</span>
          </h2>
          <p className="text-xl text-slate-400">See how CoinTrack helped our beta users save thousands</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">Saved {testimonial.savings}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Registration Form */}
      <section id="preregister" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-12 md:p-16 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                <Bell className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Limited Spots Available</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Early Access to
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  CoinTrack
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Join the waitlist now and be among the first 10,000 users to access CoinTrack before the public launch.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Instant Access on Launch Day</div>
                    <div className="text-sm text-slate-400">Skip the line and start tracking immediately</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">3 Months Pro Free (Worth ₹297)</div>
                    <div className="text-sm text-slate-400">Full access to all premium features</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Exclusive Founder&apos;s Badge</div>
                    <div className="text-sm text-slate-400">Show you&apos;re an original CoinTrack user</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <div className="text-sm">
                    <span className="font-semibold text-orange-300">Only 2,847 spots left</span>
                    <span className="text-slate-300"> out of 10,000!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {formSubmitted ? (
                <div className="p-12 rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 text-center backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">You&apos;re In! 🎉</h3>
                  <p className="text-slate-300 mb-6">
                    Welcome to the CoinTrack family! We&apos;ve sent a confirmation email to <span className="font-semibold text-purple-400">{formData.email}</span>
                  </p>
                  <div className="space-y-3 text-left bg-slate-900/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span className="text-sm text-slate-300">Check your email for confirmation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span className="text-sm text-slate-300">We&apos;ll notify you 48 hours before launch</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span className="text-sm text-slate-300">Get instant access on launch day</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-sm shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
                    <p className="text-slate-400 text-sm">Takes only 30 seconds • No credit card required</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition text-white placeholder-slate-500"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        id="terms"
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-slate-800 text-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="terms" className="text-sm text-slate-400">
                        I agree to receive early access notifications and updates from CoinTrack. 
                        You can unsubscribe anytime.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 font-bold text-lg flex items-center justify-center gap-2"
                    >
                      Secure My Spot
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span>Secure</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>No Spam</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-400" />
                        <span>Instant Access</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="text-slate-400 mb-8">Trusted by leading organizations and featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            <div className="text-2xl font-bold">TechCrunch</div>
            <div className="text-2xl font-bold">YourStory</div>
            <div className="text-2xl font-bold">Economic Times</div>
            <div className="text-2xl font-bold">Inc42</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "When will CoinTrack launch?",
              a: "We're launching in 45 days! Early access members will get access 48 hours before the public launch."
            },
            {
              q: "Is CoinTrack really free?",
              a: "Yes! CoinTrack has a free plan with basic features. Early access members get 3 months of Pro features (worth ₹297) absolutely free."
            },
            {
              q: "How does the AI insights feature work?",
              a: "Our AI analyzes your spending patterns, identifies recurring expenses, and suggests personalized ways to save. For example, if you buy coffee 5 times a week, it'll calculate potential savings if you reduce it to 3 times."
            },
            {
              q: "Is my financial data secure?",
              a: "Absolutely. We use bank-level 256-bit AES encryption, and your data is never shared with third parties. We're also SOC 2 Type II certified."
            },
            {
              q: "Can I cancel my pre-registration?",
              a: "Yes, you can unsubscribe from our emails anytime. No commitments, no credit card required."
            },
            {
              q: "Which platforms will CoinTrack be available on?",
              a: "CoinTrack will launch on iOS, Android, and Web. We're also working on smartwatch integration for quick logging."
            }
          ].map((faq, i) => (
            <details key={i} className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm">
              <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                {faq.q}
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Don&apos;t Miss Out on Early Access!</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join 50,000+ smart savers who are already on the waitlist. Launch in 45 days!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#preregister" className="px-10 py-4 rounded-full bg-white text-purple-600 font-bold hover:bg-slate-100 transition transform hover:scale-105 shadow-xl">
                Join Waitlist Now
              </a>
              <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">CoinTrack</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 max-w-sm">
                Track small expenses, save big money. Your AI-powered personal expense companion that helps you understand and control your spending habits.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <span className="sr-only">Twitter</span>
                  𝕏
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <span className="sr-only">LinkedIn</span>
                  in
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <span className="sr-only">Instagram</span>
                  IG
                </a>
              </div>
            </div>
            
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'FAQ', 'Roadmap', 'Changelog'] },
              { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'GDPR'] }
            ].map((col, i) => (
              <div key={i}>
                <div className="font-semibold mb-4 text-white">{col.title}</div>
                <ul className="space-y-3 text-sm text-slate-400">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="hover:text-purple-400 transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>© 2025 CoinTrack Technologies Pvt. Ltd. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-purple-400 transition">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition">Terms</a>
              <a href="#" className="hover:text-purple-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}