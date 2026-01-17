'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#1C1C1C] border-b-2 border-[#FF6F61] py-4">
            <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="text-2xl font-bold text-[#FF6F61] hover:text-[#FF4500] transition-colors duration-300"
                >
                    VN
                </Link>

                {/* Navigation Links */}
                <div className="flex gap-8 items-center">
                    <Link 
                        href="/" 
                        className="text-[#F5E8D8] hover:text-[#FF4500] transition-colors duration-300 relative group"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link 
                        href="/dashboard" 
                        className="text-[#F5E8D8] hover:text-[#FF4500] transition-colors duration-300 relative group"
                    >
                        Dashboard
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link 
                        href="/settings" 
                        className="text-[#F5E8D8] hover:text-[#FF4500] transition-colors duration-300 relative group"
                    >
                        Settings
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}