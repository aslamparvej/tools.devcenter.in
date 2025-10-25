import React from 'react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1e3e] to-[#2a1e3e] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[20%] w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
          <span className="text-2xl">🚀</span>
          <span className="text-sm text-gray-300">Launching Soon</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          Build. Ship.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            Scale.
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          A curated collection of powerful micro SaaS tools designed to
          supercharge your productivity and creativity.
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center text-3xl font-bold mb-2">
              00
            </div>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center text-3xl font-bold mb-2">
              00
            </div>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center text-3xl font-bold mb-2">
              00
            </div>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center text-3xl font-bold mb-2">
              00
            </div>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>

        {/* Email Signup */}
        <div className="w-full max-w-md">
          <p className="text-gray-400 mb-4">Get notified when we launch</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
              Notify Me
            </button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">Optimized tools that deliver results in milliseconds</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              🛠️
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer First</h3>
            <p className="text-gray-400 text-sm">Built by developers, for developers</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
            <p className="text-gray-400 text-sm">Focused tools that do one thing exceptionally well</p>
          </div>
        </div>
      </main>
    </div>
  );
}