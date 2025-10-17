import React from 'react';
import { Sparkles, Zap, Code, Palette, ArrowUpRight } from 'lucide-react';

const Tools = () => {

    const tools = [
        {
            name: "Captify",
            slug: "captify",
            description: "Generate engaging social media captions and inspirational quotes with AI-powered creativity",
            icon: <Sparkles className="w-8 h-8" />,
            gradient: "from-purple-500 via-pink-500 to-red-500",
            features: ["AI Caption Generator", "Quote Creation", "Social Media Ready", "Mobile Optimized"],
            status: "Live"
        },
        {
            name: "Dev Center",
            slug: "devcenter",
            url: "https://www.devcenter.in/",
            description: "Stay ahead in tech with insightful articles, tutorials, and developer stories from the world of web, mobile, and AI innovation.",
            icon: <Code className="w-8 h-8" />,
            gradient: "from-yellow-500 via-white-500 to-yellow-700",
            features: ["Developer-Focused Content", "Hands-on Tutorials", "Tech Insights & Trends", "Modern Web & Mobile Topics"],
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
        // window.location.href = `http://localhost:3000/${slug}`;
        window.location.href = `${process.env.DOMAIN}/${slug}`
    };

    return (
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
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${tool.status === 'Live'
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
    )
}

export default Tools;
