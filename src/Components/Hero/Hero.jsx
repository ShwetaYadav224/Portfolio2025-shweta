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
  ExternalLink
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
    <header className="relative min-h-screen overflow-hidden text-white bg-[#0F0715] pt-24 lg:pt-32">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid min-h-screen items-center gap-y-12 py-20 lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:py-0">

          {/* Left Column: Text */}
          <div className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left pt-10 lg:pt-0">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10 hover:bg-white/5 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="opacity-0 animate-fade-in-up delay-100 mb-4 text-lg font-medium text-gray-400">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-gradient-primary">
                Shweta Yadav
              </span>
            </h1>

            {/* Tagline */}
            <div className="opacity-0 animate-fade-in-up delay-400 mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200">
                Full Stack Developer who builds
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-2">
                <span className="text-purple-400 underline decoration-purple-500/30 underline-offset-4">immersive web experiences.</span>
              </p>
            </div>

            {/* Description */}
            <p className="opacity-0 animate-fade-in-up delay-600 mb-10 text-lg leading-relaxed text-gray-400 max-w-xl mx-auto lg:mx-0">
              I transform ideas into elegant, functional web applications.
              Passionate about clean code, modern design, and creating experiences that users love.
            </p>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-700 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative rounded-full bg-white text-black px-8 py-4 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="rounded-full glass px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 text-center backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Skill Tags */}
            <div className="opacity-0 animate-fade-in-up delay-800 mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-all cursor-default border border-white/5"
                >
                  <span className="text-purple-400">{skill.icon}</span>
                  {skill.text}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up delay-800 mt-10 flex items-center justify-center gap-6 lg:justify-start">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-400 hover:text-white transition-colors duration-300"
                  title={label}
                >
                  <Icon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
            <div className="relative group perspective-1000">
              {/* Abstract decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />

              <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                {imageError ? (
                  <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl glass flex items-center justify-center border border-white/10">
                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-600">SY</span>
                  </div>
                ) : (
                  <img
                    src={hero}
                    alt="Shweta Yadav"
                    className={`w-72 sm:w-80 lg:w-[400px] object-cover rounded-2xl shadow-2xl shadow-purple-900/20 border border-white/10 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Floating Cards */}
                <div className="absolute -right-8 top-12 glass p-4 rounded-xl opacity-0 animate-fade-in-left delay-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Clean Code</p>
                      <p className="text-sm font-bold">Always</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-20 glass p-4 rounded-xl opacity-0 animate-fade-in-right delay-700 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                      <Palette size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Design</p>
                      <p className="text-sm font-bold">Pixel Perfect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};