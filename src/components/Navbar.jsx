import React, { useState } from 'react';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full h-[75px] flex justify-between items-center shadow-lg px-4 md:px-10 relative z-50">
        {/* Name */}
        <div className="text-[24px] md:text-[36px] ml-2 md:ml-5 font-bold navname">
          SHRIKANT
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-[18px] md:text-[22px] font-code">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#Experience" className="hover:text-gray-400">Experience</a>
            <a href="#project" className="hover:text-gray-400">Project</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.64 17l-.71.71a1 1 0 000 1.41 1 1 0 001.41 0l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm7-7a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zM5.64 7.05a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.41 1.41zm12 .29a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.64.71a1 1 0 000 1.41 1 1 0 00.66.29zM21 11h-1a1 1 0 000 2h1a1 1 0 000-2zm-9 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm6.36-2A1 1 0 0017 18.36l.71.71a1 1 0 001.41 0 1 1 0 000-1.41zM12 6.5a5.5 5.5 0 105.5 5.5A5.51 5.51 0 0012 6.5zm0 9a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"/>
            </svg>

            {/* Toggle */}
            <label htmlFor="modecheckbox" className="relative inline-block w-14 h-8">
              <input
                type="checkbox"
                id="modecheckbox"
                className="peer sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="absolute inset-0 bg-black peer-checked:bg-orange-400 rounded-full transition"></span>
              <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition"></span>
            </label>

            {/* Moon Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05zm-9.5 6.69A8.14 8.14 0 017.08 5.22v.27a10.15 10.15 0 0010.14 10.14 9.79 9.79 0 002.1-.22 8.11 8.11 0 01-7.18 4.32z"/>
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--current-color)' }}
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[75px] left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col gap-4 py-4 text-lg font-bold text-center shadow-lg z-40">
            <a href="#about" className="hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#Experience" className="hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#project" className="hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Project</a>
            <a href="#contact" className="hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>



   
    </>

  );
};
