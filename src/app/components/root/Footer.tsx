import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/10 px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="">
                            <Link href="/">
                                <img className='h-[4rem]' src="./dev-center-logo-white.png" alt="Dev Center Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex space-x-6 text-gray-400">
                        <a href="/privacy" className="hover:text-white transition-colors text-sm">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors text-sm">Terms</a>
                        <a href="/supports" className="hover:text-white transition-colors text-sm">Support</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
                    <p>&copy; 2025 Dev Center Tools. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
