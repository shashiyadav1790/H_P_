import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">PixelCraft</h2>
          <p className="mt-2 text-sm text-gray-400">
            Capturing Moments, Crafting Stories
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-400 text-xl mt-2">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PixelCraft Studios. All rights reserved.
        <br />
        Created by <span className="text-red-500 font-semibold">Shashi Yadav ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
