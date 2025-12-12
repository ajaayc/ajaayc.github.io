// LeftPanel.jsx
import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function LeftPanel() {
  const personalWebsite = 'https://yourwebsite.com';

  return (
    <aside className="flex flex-col w-64 md:w-1/4 lg:w-1/5 bg-green-50 p-6 border-r border-green-200">
      <div className="flex-shrink-0 w-full flex justify-center mb-4">
        <div className="w-32 h-32 bg-green-100 flex items-center justify-center rounded-full text-green-500 font-bold text-xl">Photo</div>
      </div>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Hi, I'm AJ.</h1>
      <p className="text-gray-700 mb-4">
        I’m a robotics and software engineer who loves building reliable systems,
        exploring autonomy, and sharing what I learn along the way.
      </p>
      <div className="flex gap-4 mt-auto">
        <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaGithub size={20} /></a>
        <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaYoutube size={20} /></a>
        <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaLinkedin size={20} /></a>
      </div>
    </aside>
  );
}
