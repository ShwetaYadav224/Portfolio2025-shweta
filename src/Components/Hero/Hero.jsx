import React, { useState, useEffect } from "react";
import hero from "../../assets/hero1.png";
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  ArrowDown,
  Sparkles,
  Code2,
  Palette,
  Smartphone,
} from "lucide-react";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const skills = [
    { icon: <Code2 className="w-4 h-4" />, text: "Full Stack" },
    { icon: <Smartphone className="w-4 h-4" />, text: "Mobile Apps" },
    { icon: <Palette className="w-4 h-4" />, text: "UI/UX Design" },
  ];

  const socials = [
    { Icon: Linkedin, href: "https://linkedin.com/in/shweta-yadav", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/ShwetaYadav224", label: "GitHub" },
    { Icon: Twitter, href: "https://twitter.com/shweta_yadav", label: "Twitter" },
    { Icon: Mail, href: "mailto:shweta2025y@gmail.com", label: "Email" },
  ];

  return (
    <header className="relative min-h-screen overflow-hidden text-white bg-gradient-to-br from-[#1a0b2e] via-[#1e0e37] to-[#150825]">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#A1A1AA]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#71717A]/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-500" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid min-h-screen items-center gap-y-12 py-20 lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:py-0">

          {/* Left Column: Text */}
          <div className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
            {/* Badge */}
            <div className="opacity-0-start animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
              <span className="text-sm font-medium text-[#A1A1AA]">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="opacity-0-start animate-fade-in-up animation-delay-100 mb-4 text-lg font-medium text-[#A1A1AA]">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="opacity-0-start animate-fade-in-up animation-delay-200 mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="bg-gradient-to-r from-white via-white to-[#A1A1AA] bg-clip-text text-transparent">
                Shweta Yadav
              </span>
            </h1>

            {/* Tagline */}
            <div className="opacity-0-start animate-fade-in-up animation-delay-400 mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90">
                Full Stack Developer who builds
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-1">
                <span className="bg-gradient-to-r from-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
                  beautiful digital experiences
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="opacity-0-start animate-fade-in-up animation-delay-600 mb-10 text-lg leading-relaxed text-white/60 max-w-xl">
              I transform ideas into elegant, functional web applications.
              Passionate about clean code, modern design, and creating experiences that users love.
            </p>

            {/* CTA Buttons */}
            <div className="opacity-0-start animate-fade-in-up animation-delay-700 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative rounded-xl bg-gradient-to-r from-[#A1A1AA] to-[#71717A] px-8 py-4 font-semibold text-white shadow-lg shadow-[#A1A1AA]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#A1A1AA]/30 hover:scale-105 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-[#A1A1AA]/50 hover:scale-105 text-center backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Skill Tags */}
            <div className="opacity-0-start animate-fade-in-up animation-delay-800 mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  <span className="text-[#A1A1AA]">{skill.icon}</span>
                  {skill.text}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="opacity-0-start animate-fade-in-up animation-delay-900 mt-8 flex items-center justify-center gap-4 lg:justify-start">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-[#A1A1AA]/30 hover:text-white hover:scale-110"
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#A1A1AA]/20 animate-spin" style={{ animationDuration: '20s' }} />

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#A1A1AA]/20 via-white/10 to-[#71717A]/20 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative">
                {!imageLoaded && !imageError && (
                  <div className="h-72 w-72 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem] rounded-full bg-gradient-to-br from-white/10 to-white/5 animate-pulse" />
                )}

                {imageError && (
                  <div className="flex h-72 w-72 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem] items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="text-center p-8">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#A1A1AA]/20 to-[#71717A]/20">
                        <span className="text-4xl font-bold text-white">S</span>
                      </div>
                      <p className="text-sm text-white/60">Shweta Yadav</p>
                    </div>
                  </div>
                )}

                <img
                  src={hero}
                  alt="Shweta Yadav - Full Stack Developer"
                  draggable="false"
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-72 sm:w-80 lg:w-[26rem] max-w-[85vw] select-none drop-shadow-2xl transition-all duration-700 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md animate-float">
                  <Code2 className="w-4 h-4 text-[#A1A1AA]" />
                  <span className="text-sm font-medium text-white">Developer</span>
                </div>

                <div className="absolute -bottom-2 -left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md animate-float animation-delay-500">
                  <Palette className="w-4 h-4 text-[#A1A1AA]" />
                  <span className="text-sm font-medium text-white">Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>

      {/* Floating decorative dots */}
      <div className="pointer-events-none absolute top-1/4 left-20 w-2 h-2 rounded-full bg-[#A1A1AA] animate-float" />
      <div className="pointer-events-none absolute top-1/3 right-32 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-700" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-float animation-delay-300" />
    </header>
  );
};