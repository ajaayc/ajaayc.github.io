// TopNavigationBar.jsx
import React from 'react';

export default function TopNavigationBar({ scrollToSection }) {
  return (
    <nav class="flex justify-evenly sticky top-0 bg-white z-20 py-4 border-b border-green-200">
      <button onClick={() => scrollToSection('about')} className="text-green-700 font-semibold hover:underline">About</button>
      <button onClick={() => scrollToSection('experience')} className="text-green-700 font-semibold hover:underline">Experience</button>
      <button onClick={() => scrollToSection('projects')} className="text-green-700 font-semibold hover:underline">Projects</button>
      <button onClick={() => scrollToSection('contact')} className="text-green-700 font-semibold hover:underline">Contact</button>
    </nav>
  );
}
