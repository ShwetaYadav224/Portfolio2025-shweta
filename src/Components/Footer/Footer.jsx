import React from "react";
import { Linkedin, Github, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    const socials = [
        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/shweta-yadav", label: "LinkedIn" },
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/ShwetaYadav224", label: "GitHub" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/shweta_yadav", label: "Twitter" },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:shweta2025y@gmail.com", label: "Email" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#0d0518] py-16 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <button
                        onClick={scrollToTop}
                        className="text-2xl font-bold text-white transition-all duration-300 hover:scale-105 group"
                    >
                        <span className="bg-gradient-to-r from-[#A1A1AA] to-white bg-clip-text text-transparent">S</span>
                        <span className="group-hover:text-[#A1A1AA] transition-colors">hweta</span>
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/60 transition-all duration-300 hover:text-white relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A1A1AA] to-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 border border-white/5 hover:border-white/20"
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-3 text-center text-sm text-white/50">
                        <p>© {currentYear} Shweta Yadav. All rights reserved.</p>
                        <p className="flex items-center gap-1.5">
                            Made with <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" /> using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="absolute right-6 bottom-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#A1A1AA]/20 to-[#71717A]/20 text-white/70 transition-all duration-300 hover:from-[#A1A1AA]/30 hover:to-[#71717A]/30 hover:text-white hover:scale-110 border border-white/10 hover:border-[#A1A1AA]/30"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </footer>
    );
};
