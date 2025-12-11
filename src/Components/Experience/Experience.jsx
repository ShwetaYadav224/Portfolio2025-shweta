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
        <section id="experience" className="relative py-24 bg-[#0F0715] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">CAREER PATH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                        Work Experience
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent md:-translate-x-px" />

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                            {/* Dot on Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#0F0715] z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                            {/* Content */}
                            <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left" : "md:pl-12 text-left"}`}>
                                <div className="glass p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all group">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center gap-1"><Briefcase size={14} className="text-purple-400" /> {exp.company}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} className="text-purple-400" /> {exp.location}</span>
                                        <span className="flex items-center gap-1"><Calendar size={14} className="text-purple-400" /> {exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
