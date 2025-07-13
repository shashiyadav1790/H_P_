import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['home', 'gallery', 'about', 'contact', 'services'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 from-slate-900/90 to-gray-900/90 backdrop-blur-md text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-gray-400 drop-shadow-sm hover:text-indigo-300 transition-all duration-300">
          PixelCraft
        </h1>

        {/* Hamburger */}
        <div
          className="md:hidden text-3xl cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {links.map(link => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize relative group hover:text-indigo-400 transition-all"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-800/95 backdrop-blur-md text-center text-lg space-y-4 py-4 animate-fade-in-down">
          {links.map(link => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="capitalize hover:text-indigo-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
