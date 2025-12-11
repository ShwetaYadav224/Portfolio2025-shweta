import React, { useState } from "react";
import { Mail, Send, MapPin, Phone, Linkedin, Github, Twitter, Sparkles } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        { icon: <Mail className="h-5 w-5" />, text: "shweta2025y@gmail.com", href: "mailto:shweta2025y@gmail.com" },
        { icon: <MapPin className="h-5 w-5" />, text: "India", href: null },
        { icon: <Phone className="h-5 w-5" />, text: "Available for calls", href: null },
    ];

    const socials = [
        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/shweta-yadav", label: "LinkedIn" },
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/ShwetaYadav224", label: "GitHub" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/shweta_yadav", label: "Twitter" },
    ];

    return (
        <section
            id="contact"
            className="relative py-24 lg:py-36 bg-gradient-to-br from-[#1a0b2e] via-[#1e0e37] to-[#150825] overflow-hidden"
        >
            {/* Background orbs */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-[#A1A1AA]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#71717A]/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0-start animate-fade-in-down">
                        <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
                        <span className="text-sm font-medium text-[#A1A1AA]">Get In Touch</span>
                    </div>
                    <h2 className="opacity-0-start animate-fade-in-up animation-delay-200 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        Let's Work
                        <span className="block mt-2 bg-gradient-to-r from-white via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>
                    <p className="opacity-0-start animate-fade-in animation-delay-400 mt-6 text-lg text-white/60 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                    {/* Left: Contact Info */}
                    <div className="opacity-0-start animate-fade-in-left animation-delay-300 space-y-6">
                        {/* Info Card */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h3 className="mb-6 text-xl font-semibold text-white">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#A1A1AA]/30 group-hover:bg-white/10 transition-all">
                                            <span className="text-white group-hover:text-[#A1A1AA] transition-colors">{info.icon}</span>
                                        </div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-white/80 hover:text-white transition-colors"
                                            >
                                                {info.text}
                                            </a>
                                        ) : (
                                            <span className="text-white/80">{info.text}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links Card */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 text-lg font-semibold text-white">
                                Follow Me
                            </h3>
                            <div className="flex gap-3">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#A1A1AA]/30 hover:bg-white/10 hover:text-white hover:scale-110"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="opacity-0-start animate-fade-in-right animation-delay-400">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#A1A1AA]/20 via-white/10 to-[#71717A]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-[#A1A1AA] focus:ring-1 focus:ring-[#A1A1AA] hover:border-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-[#A1A1AA] focus:ring-1 focus:ring-[#A1A1AA] hover:border-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-[#A1A1AA] focus:ring-1 focus:ring-[#A1A1AA] hover:border-white/20 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group/btn w-full rounded-xl bg-gradient-to-r from-[#A1A1AA] to-[#71717A] px-8 py-4 font-semibold text-white shadow-lg shadow-[#A1A1AA]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#A1A1AA]/30 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <Send className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="pointer-events-none absolute top-1/4 right-24 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
            <div className="pointer-events-none absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-600" />
        </section>
    );
};
