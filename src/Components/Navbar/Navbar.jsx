import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass mx-auto max-w-7xl px-6 py-4 mt-4 rounded-full border border-white/10 flex items-center justify-between md:px-12 backdrop-blur-md bg-black/20">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">S</span>
          <span className="text-white">hweta</span>
        </a>

        {/* Hamburger / Close icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass p-6 rounded-2xl flex flex-col gap-4 md:hidden z-50 animate-fade-in-down border border-white/10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={handleClick}
              className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;