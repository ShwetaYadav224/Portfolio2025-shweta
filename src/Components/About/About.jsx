import React from "react";
import { GraduationCap, MapPin, Code2, Sparkles, Coffee, Zap, Target, ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0F0715] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
            Behind the Code
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm more than just a developer. I'm a problem solver, a creator, and a lifelong learner.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 min-h-[600px]">

          {/* Large Bio Card */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 glass rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/20 rounded-full blur-[80px] -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
              <p>
                Hey there! I'm <span className="text-purple-300 font-medium">Shweta</span>, a passionate Full Stack Developer who transforms ideas into elegant digital solutions.
              </p>
              <p>
                With a strong foundation in <span className="text-white font-medium">React, Node.js, and Cloud Technologies</span>, I specialize in building scalable web applications that are both performant and beautiful.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech stacks, contributing to open source, or brewing the perfect cup of coffee while brainstorming my next big project.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <MapPin size={16} className="text-purple-400" /> India
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <GraduationCap size={16} className="text-purple-400" /> B.Tech CS
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-white/5 hover:border-white/10 transition-all hover:bg-white/5">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-600 mb-2">10+</div>
            <div className="text-gray-400 font-medium">Projects Completed</div>
          </div>

          {/* Focus/Goals Card */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 glass rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all hover:bg-white/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Goal Oriented</h4>
              <p className="text-gray-400 text-sm">Focused on delivering high-quality results.</p>
            </div>
          </div>

          {/* Tech Focus Card */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 glass rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all hover:bg-white/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Fast Learner</h4>
              <p className="text-gray-400 text-sm">Always adapting to new technologies.</p>
            </div>
          </div>

          {/* Download CV (Action) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 glass rounded-3xl p-8 flex items-center justify-between border border-white/5 hover:border-white/10 transition-all hover:bg-white/5 group cursor-pointer">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Want to know more?</h4>
              <p className="text-gray-400">Download my resume to see the full picture.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={24} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
