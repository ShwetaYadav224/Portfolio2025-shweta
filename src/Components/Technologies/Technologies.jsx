import {
  Code2,
  Brain,
  Atom,
  Server,
  Paintbrush,
  Flame,
  Database,
  GitBranch,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

export const Technologies = () => {
  const techStack = [
    { icon: <Code2 className="w-8 h-8" />, lang: "JavaScript", progress: 90, color: "from-yellow-500 to-yellow-600" },
    { icon: <Brain className="w-8 h-8" />, lang: "Python", progress: 85, color: "from-green-500 to-green-600" },
    { icon: <Atom className="w-8 h-8" />, lang: "React.js", progress: 90, color: "from-cyan-400 to-cyan-600" },
    { icon: <Server className="w-8 h-8" />, lang: "Node.js", progress: 85, color: "from-green-600 to-green-700" },
    { icon: <Paintbrush className="w-8 h-8" />, lang: "Tailwind", progress: 90, color: "from-sky-400 to-sky-600" },
    { icon: <Flame className="w-8 h-8" />, lang: "Firebase", progress: 80, color: "from-orange-500 to-orange-600" },
    { icon: <Database className="w-8 h-8" />, lang: "MongoDB", progress: 80, color: "from-emerald-500 to-emerald-600" },
    { icon: <GitBranch className="w-8 h-8" />, lang: "Git", progress: 85, color: "from-red-500 to-red-600" },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-gradient-to-br from-[#1e0e37] via-[#1a0b2e] to-[#150825] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#A1A1AA]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#71717A]/5 rounded-full blur-3xl animate-pulse animation-delay-700" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0-start animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
            <span className="text-sm font-medium text-[#A1A1AA]">Tech Stack</span>
          </div>
          <h2 className="opacity-0-start animate-fade-in-up animation-delay-200 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Technologies I
            <span className="block mt-2 bg-gradient-to-r from-white via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              lang={tech.lang}
              progress={tech.progress}
              color={tech.color}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute top-1/3 left-20 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-500" />
    </section>
  );
};

const TechCard = ({ icon, lang, progress, color, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(progress), delay + 300);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  return (
    <div
      className="opacity-0-start animate-scale-in group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-xl hover:shadow-[#A1A1AA]/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>

      {/* Language Name */}
      <h3 className="text-center text-lg font-semibold text-white mb-4 group-hover:text-[#A1A1AA] transition-colors">
        {lang}
      </h3>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-center text-xs text-white/50 mt-2">{progress}%</p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-300" />
    </div>
  );
};
