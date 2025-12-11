import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // single source of truth – same greys as Hero
  const accent = '#A1A1AA';

  const links = [
    { label: 'About',     href: '#about' },
    { label: 'Experience',href: '#experience' },
    { label: 'Projects',  href: '#projects' },
    { label: 'Contact',   href: '#contact' },
  ];

  const handleClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-[#1A0B2E]/90 backdrop-blur-sm text-white px-6 py-4 md:px-20">
      <span className="text-xl font-bold tracking-wide">
        <span style={{ color: accent }}>S</span>hweta
      </span>

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
              className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus:ring-1 focus:ring-[#A1A1AA]/50 rounded"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-48 bg-[#1A0B2E]/95 backdrop-blur-sm text-white px-4 py-4 shadow-2xl flex flex-col gap-3 font-medium md:hidden z-50">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={handleClick}
                className="block transition-colors hover:text-[#A1A1AA]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;