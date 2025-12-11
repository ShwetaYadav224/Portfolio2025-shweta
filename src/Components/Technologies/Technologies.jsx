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
    <section className="relative py-24 bg-[#0F0715] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              lang={tech.lang}
              progress={tech.progress}
              color={tech.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, lang, progress, color, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(progress), 500 + delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  return (
    <div
      className="group relative rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`p-4 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {icon}
        </div>
      </div>

      <h3 className="text-center text-lg font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {lang}
      </h3>

      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>

      <p className="text-center text-xs text-gray-400 mt-3 font-medium">{progress}% Proficiency</p>
    </div>
  );
};
