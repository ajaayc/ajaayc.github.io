import React from 'react';

export default function TopNavigationBar({ scrollToSection }) {
  return (
    <nav
      className="w-full flex justify-evenly bg-white z-30 py-4 border-b border-green-200 fixed top-0 left-0"
    >
      <button onClick={() => scrollToSection('about')} className="text-green-700 font-semibold hover:underline">
        About
      </button>
      <button onClick={() => scrollToSection('experience')} className="text-green-700 font-semibold hover:underline">
        Experience
      </button>
      <button onClick={() => scrollToSection('projects')} className="text-green-700 font-semibold hover:underline">
        Projects
      </button>
      <button onClick={() => scrollToSection('misc')} className="text-green-700 font-semibold hover:underline">
        Miscellaneous
      </button>
      <button onClick={() => scrollToSection('contact')} className="text-green-700 font-semibold hover:underline">
        Contact
      </button>
    </nav>
  );
}
