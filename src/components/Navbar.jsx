import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['home', 'gallery', 'about', 'services', 'contact'];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-yellow-500">
          PixelCraft
        </h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer capitalize hover:text-yellow-500 transition-all"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[300px] py-4 border-t border-gray-300' : 'max-h-0'
        }`}
      >
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="block py-2 capitalize text-lg font-medium text-gray-700 hover:text-yellow-500 transition"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
