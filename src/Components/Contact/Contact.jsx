import React, { useState } from "react";
import { Mail, Send, MapPin, Phone, Linkedin, Github, Twitter, Sparkles } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thanks for reaching out!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-24 bg-[#0F0715] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Contact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Let's build something amazing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
                            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                            <div className="space-y-4">
                                <a href="mailto:shweta2025y@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">shweta2025y@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-gray-300">India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass p-8 rounded-3xl border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
