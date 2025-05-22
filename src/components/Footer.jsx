import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold">Ifeoluwa Gbolahan</h3>
          <p className="text-sm text-gray-400">Frontend Engineer | Passionate about clean UI & great UX</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
          <li><a href="#home" className="hover:text-red-400">Home</a></li>
          <li><a href="#about" className="hover:text-red-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-red-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://github.com/Ifeoluwa-cloud" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ifeoluwagbolahan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ifeoluwag90" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ifeoluwa Gbolahan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
