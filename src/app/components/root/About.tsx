'use clent';

import React from 'react';


interface Stat {
    value: string,
    label: string,
}

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

const About = () => {
    const stats: Stat[] = [
        { value: '2+', label: 'Micro SaaS Tools' },
        { value: '100', label: 'Active Users' },
        { value: '95%', label: 'Satisfaction Rate' },
        { value: '24/7', label: 'Support Available' },
    ]

    const teamMembers: TeamMember[] = [
        {
            name: 'Aslam Parvej',
            role: 'Founder & CEO',
            image: '👩‍💼',
            bio: 'Visionary entrepreneur with 1+ years in SaaS development',
        },
        {
            name: 'Farhan Abedin',
            role: 'CTO',
            image: '👨‍💻',
            bio: 'Full-stack architect passionate about micro SaaS solutions',
        },
        {
            name: 'Tuhina Khatub',
            role: 'Head of Product',
            image: '👩‍🎨',
            bio: 'Product designer focused on user-centric experiences',
        },
        {
            name: 'Fahim Abedin',
            role: 'Lead Developer',
            image: '👨‍🔬',
            bio: 'Code wizard specializing in scalable solutions',
        },
    ];


    const values = [
        {
            icon: '🚀',
            title: 'Innovation First',
            description: 'We constantly push boundaries to create cutting-edge tools that transform how developers work.',
        },
        {
            icon: '🎯',
            title: 'Quality Obsessed',
            description: 'Every tool we build undergoes rigorous testing to ensure it meets our high standards.',
        },
        {
            icon: '🤝',
            title: 'Community Driven',
            description: 'We listen to our users and evolve our products based on real feedback and needs.',
        },
        {
            icon: '⚡',
            title: 'Speed Matters',
            description: 'We believe in rapid deployment and quick iterations to deliver value faster.',
        },
    ];

    return (
        <div id='about'>
            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 text-center hover:border-[#EEB30D]/50 transition-all"
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-[#EEB30D] to-[#A57B08] bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Dev Center was born from a simple observation: developers spend too much time on
                                repetitive tasks and not enough time building what matters. In 2020, we set out
                                to change that.
                            </p>
                            <p>
                                What started as a small collection of developer tools has grown into a comprehensive
                                ecosystem of micro SaaS solutions. Each tool is carefully crafted to solve a specific
                                problem, allowing you to focus on creativity and innovation.
                            </p>
                            <p>
                                Today, we&apos;re proud to serve over 100,000 developers worldwide, helping them build
                                faster, ship smarter, and scale with confidence.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-lg">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                                        💡
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">2020</div>
                                        <div className="text-gray-400 text-sm">Founded</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-2xl">
                                        🚀
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">2022</div>
                                        <div className="text-gray-400 text-sm">50+ Tools Launched</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                                        🌍
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">2025</div>
                                        <div className="text-gray-400 text-sm">Global Reach</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
                    <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-[#EEB30D]/50 transition-all group"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hidden">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                    <p className="text-gray-400 text-lg">The people behind the magic</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all text-center group"
                        >
                            <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                                {member.image}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                            <div className="text-purple-400 text-sm mb-3">{member.role}</div>
                            <p className="text-gray-400 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About;
