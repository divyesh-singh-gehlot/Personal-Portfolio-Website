import React, { useState } from 'react';
import GooeyNav from '../Components/GooeyNav';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Resume", href: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-black text-white mx-auto h-fit w-full">
      {/* Desktop Nav */}
<div className="hidden md:flex items-center justify-evenly py-4">
  <h1 className="text-2xl font-bold ">DIVYESH SINGH GEHLOT</h1>
  <div className=" w-full max-w-3xl flex justify-evenly">
    <GooeyNav
      items={items}
      particleCount={15}
      particleDistances={[90, 10]}
      particleR={100}
      initialActiveIndex={0}
      animationTime={600}
      timeVariance={300}
      colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    />
  </div>
</div>


      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">DIVYESH SINGH GEHLOT</h1>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black w-full fixed top-14 left-0 z-50">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-center py-2 hover:bg-gray-700 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;