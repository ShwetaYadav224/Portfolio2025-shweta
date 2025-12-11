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
        {
            title: "Blog Platform",
            description: "A content management system with markdown support, comments, and user authentication.",
            tech: ["Next.js", "PostgreSQL", "Prisma"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
        },
        {
            title: "Chat Application",
            description: "Real-time messaging app with group chats, file sharing, and end-to-end encryption.",
            tech: ["React", "Socket.io", "Express"],
            github: "https://github.com/ShwetaYadav224",
            live: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="relative py-24 lg:py-36 bg-gradient-to-br from-[#1a0b2e] via-[#1e0e37] to-[#150825] overflow-hidden"
        >
            {/* Background orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#A1A1AA]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#71717A]/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0-start animate-fade-in-down">
                        <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
                        <span className="text-sm font-medium text-[#A1A1AA]">My Work</span>
                    </div>
                    <h2 className="opacity-0-start animate-fade-in-up animation-delay-200 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        Featured
                        <span className="block mt-2 bg-gradient-to-r from-white via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="opacity-0-start animate-fade-in animation-delay-400 mt-6 text-lg text-white/60 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0-start animate-scale-in group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#A1A1AA]/10 hover:-translate-y-2"
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                            {/* Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-[#A1A1AA]/20 group-hover:to-white/10 transition-all">
                                    <Folder className="h-6 w-6 text-white group-hover:text-[#A1A1AA] transition-colors" />
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-[#A1A1AA] transition-colors">
                                {project.title}
                            </h3>
                            <p className="mb-6 text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-all group-hover:border-[#A1A1AA]/30 group-hover:text-white/90"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-[#A1A1AA]/5 group-hover:to-transparent transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="opacity-0-start animate-fade-in-up animation-delay-1000 mt-12 text-center">
                    <a
                        href="https://github.com/ShwetaYadav224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#A1A1AA] to-[#71717A] px-8 py-4 font-semibold text-white shadow-lg shadow-[#A1A1AA]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#A1A1AA]/30 hover:scale-105"
                    >
                        <Github className="h-5 w-5" />
                        View More on GitHub
                    </a>
                </div>
            </div>

            {/* Floating elements */}
            <div className="pointer-events-none absolute top-1/4 right-24 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
            <div className="pointer-events-none absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-600" />
        </section>
    );
};
