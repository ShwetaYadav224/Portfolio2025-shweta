import React from "react";
import { ExternalLink, Github, Folder, Sparkles } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
            featured: true,
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team features.",
            tech: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with location-based forecasts and interactive maps.",
            tech: ["JavaScript", "OpenWeather API", "Chart.js"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
            tech: ["React", "Tailwind CSS", "Vite"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="relative py-24 bg-[#0F0715] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-[#0F0715]/50 z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">My Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my recent work, highlighting my skills in full-stack development and UI design.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl border border-white/10 bg-[#1A1025] hover:border-purple-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/ShwetaYadav224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                    >
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
