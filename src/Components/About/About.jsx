import React from "react";
import { GraduationCap, MapPin, Heart, Code2, Sparkles, Coffee, Zap, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: <Code2 className="w-6 h-6" />, title: "Full Stack", desc: "Frontend & Backend" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Learner", desc: "Always Evolving" },
    { icon: <Target className="w-6 h-6" />, title: "Goal Oriented", desc: "Results Driven" },
    { icon: <Coffee className="w-6 h-6" />, title: "Passionate", desc: "Love What I Do" },
  ];

  const stats = [
    { number: "10+", label: "Projects" },
    { number: "2+", label: "Years Exp" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 bg-gradient-to-br from-[#1a0b2e] via-[#1e0e37] to-[#150825] overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A1A1AA]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#71717A]/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0-start animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
            <span className="text-sm font-medium text-[#A1A1AA]">About Me</span>
          </div>
          <h2 className="opacity-0-start animate-fade-in-up animation-delay-200 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Passionate about crafting
            <span className="block mt-2 bg-gradient-to-r from-white via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
              digital experiences
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">

          {/* Left Column - Profile Card */}
          <div className="lg:col-span-5 opacity-0-start animate-fade-in-left animation-delay-300">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A1A1AA]/30 via-white/20 to-[#71717A]/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
                {/* Profile Image Placeholder */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A1A1AA] to-[#71717A] animate-pulse" />
                  <div className="absolute inset-1 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">S</span>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a0b2e] animate-pulse" />
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Shweta Yadav</h3>
                  <p className="text-[#A1A1AA] font-medium">Full Stack Developer</p>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                    <GraduationCap className="w-4 h-4 text-[#A1A1AA]" />
                    B.Tech CS
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                    <MapPin className="w-4 h-4 text-[#A1A1AA]" />
                    India
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default group/stat"
                    >
                      <div className="text-2xl font-bold text-white group-hover/stat:text-[#A1A1AA] transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-[#A1A1AA] to-[#71717A] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#A1A1AA]/25 hover:scale-[1.02] active:scale-[0.98]">
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Section */}
            <div className="opacity-0-start animate-fade-in-right animation-delay-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#A1A1AA]" />
                  My Story
                </h4>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Hey there! I'm <span className="text-white font-medium">Shweta</span>, a passionate
                    Full Stack Developer who transforms ideas into elegant, functional digital solutions.
                    With a strong foundation in modern web technologies, I create experiences that users love.
                  </p>
                  <p>
                    My journey in tech started with curiosity and has evolved into a career I'm deeply
                    passionate about. I specialize in <span className="text-[#A1A1AA]">React, Node.js, and cloud technologies</span>,
                    constantly pushing boundaries to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="opacity-0-start animate-fade-in-right animation-delay-500">
              <h4 className="text-lg font-semibold text-white mb-4">What I Bring</h4>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] cursor-default"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A1A1AA]/20 to-[#71717A]/10 flex items-center justify-center mb-4 group-hover:from-[#A1A1AA]/30 group-hover:to-[#71717A]/20 transition-all">
                      <span className="text-white group-hover:text-[#A1A1AA] transition-colors">
                        {item.icon}
                      </span>
                    </div>
                    {/* Text */}
                    <h5 className="font-semibold text-white group-hover:text-[#A1A1AA] transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-sm text-white/60 mt-1">{item.desc}</p>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A1A1AA]/0 to-white/0 group-hover:from-[#A1A1AA]/5 group-hover:to-white/5 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="opacity-0-start animate-fade-in-right animation-delay-700 flex flex-wrap gap-3">
              {["💻 Clean Code Advocate", "☕ Coffee Enthusiast", "🎨 UI/UX Lover", "🚀 Fast Learner"].map((fact, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-sm text-white/80 hover:border-[#A1A1AA]/30 hover:text-white transition-all cursor-default"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute top-1/4 right-20 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
      <div className="pointer-events-none absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-500" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white/60 animate-float animation-delay-1000" />
    </section>
  );
};
