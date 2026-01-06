// LeftPanel.jsx
import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function LeftPanel({ id }) {
  const iconSize = 52; // single variable for all icon sizes

  return (
    <aside id="left-panel" className="flex flex-col w-80 bg-green-50 p-6 border-r border-green-200 h-screen">
      <div className="flex-shrink-0 w-full flex justify-center mb-4">
        {/* Profile image */}
        <img
          src="img/guardian_cropped.jpg"
          alt="AJ Profile"
          className="w-72 h-96 rounded-2xl object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Hi, I'm AJ.</h1>
      <p className="text-gray-700 mb-4">
        I’m a software engineer who loves building reliable systems,
        exploring autonomy, and sharing what I learn along the way.
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/ajaayc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-600"
        >
          <FaGithub size={iconSize} />
        </a>
        <a
          href="https://www.youtube.com/@ajaaychandrasekaran2002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-600"
        >
          <FaYoutube size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/in/ajaayc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-600"
        >
          <FaLinkedin size={iconSize} />
        </a>
      </div>
    </aside>
  );
}
