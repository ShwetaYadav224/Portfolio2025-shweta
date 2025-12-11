import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Tech Startup",
            location: "Remote",
            period: "2024 - Present",
            description: [
                "Developed and maintained full-stack web applications using React and Node.js",
                "Collaborated with cross-functional teams to design and implement new features",
                "Optimized application performance, reducing load times by 40%",
            ],
        },
        {
            role: "Frontend Developer",
            company: "Freelance",
            location: "India",
            period: "2023 - 2024",
            description: [
                "Built responsive and interactive websites for various clients",
                "Implemented modern UI/UX designs using React and Tailwind CSS",
                "Delivered 10+ projects with 100% client satisfaction",
            ],
        },
        {
            role: "Web Development Trainee",
            company: "Coding Bootcamp",
            location: "Online",
            period: "2022 - 2023",
            description: [
                "Completed intensive training in full-stack web development",
                "Built multiple projects using MERN stack technologies",
                "Learned best practices for clean code and version control",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="relative py-24 lg:py-36 bg-gradient-to-br from-[#1e0e37] via-[#1a0b2e] to-[#150825] overflow-hidden"
        >
            {/* Background orbs */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-[#A1A1AA]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 left-10 w-64 h-64 bg-[#71717A]/5 rounded-full blur-3xl animate-pulse animation-delay-700" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0-start animate-fade-in-down">
                        <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
                        <span className="text-sm font-medium text-[#A1A1AA]">My Journey</span>
                    </div>
                    <h2 className="opacity-0-start animate-fade-in-up animation-delay-200 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        Work
                        <span className="block mt-2 bg-gradient-to-r from-white via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <p className="opacity-0-start animate-fade-in animation-delay-400 mt-6 text-lg text-white/60 max-w-2xl mx-auto">
                        A timeline of my professional journey and growth as a developer.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#A1A1AA] via-white/30 to-[#71717A]/20 transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2">
                                <div
                                    className="opacity-0-start animate-pop-in h-4 w-4 rounded-full border-4 border-[#A1A1AA] bg-[#1e0e37] shadow-lg shadow-[#A1A1AA]/30"
                                    style={{ animationDelay: `${400 + index * 200}ms` }}
                                />
                            </div>

                            {/* Content */}
                            <div
                                className={`opacity-0-start ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'} md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                                style={{ animationDelay: `${500 + index * 200}ms` }}
                            >
                                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-[#A1A1AA]/5">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-[#A1A1AA] transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                                                <Briefcase className="h-3.5 w-3.5 text-[#A1A1AA]" />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                                                <MapPin className="h-3.5 w-3.5 text-[#A1A1AA]" />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                                                <Calendar className="h-3.5 w-3.5 text-[#A1A1AA]" />
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bullet points */}
                                    <ul className="space-y-2">
                                        {exp.description.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/80 transition-colors"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#A1A1AA]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating elements */}
            <div className="pointer-events-none absolute top-1/3 left-24 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
            <div className="pointer-events-none absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-500" />
        </section>
    );
};
