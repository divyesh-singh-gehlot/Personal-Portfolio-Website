import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-black text-white w-full px-6 py-4 flex items-center justify-between">
      {/* Logo/Title */}
      <div className="text-2xl font-bold">DIVYESH SINGH GEHLOT</div>

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <a
          href="https://drive.google.com/file/d/1K0qJNUmhjQJPHDa7zAB9Vxp8ATOHzow_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:underline"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden z-50 shadow-lg">
          <a
            href="https://drive.google.com/file/d/1K0qJNUmhjQJPHDa7zAB9Vxp8ATOHzow_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg py-2 hover:underline"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
