// Minimal green-themed portfolio with scroll-friendly panel effects, subtle animations, profile picture placeholder, professional experience section with multiple rows, project cards and company cards with popup modals, social icons under the hero section, and about paragraph above experience, plus miscellaneous works section
// Tailwind CSS + Framer Motion required

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function AJPortfolioPanels() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const projects = [
    { id: 1, title: 'Project One', short: 'Short description of Project One', long: 'Detailed description with image for Project One', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Project Two', short: 'Short description of Project Two', long: 'Detailed description with image for Project Two', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Project Three', short: 'Short description of Project Three', long: 'Detailed description with image for Project Three', image: 'https://via.placeholder.com/300' },
    { id: 4, title: 'Project Four', short: 'Short description of Project Four', long: 'Detailed description with image for Project Four', image: 'https://via.placeholder.com/300' },
  ];

  const companies = [
    { id: 1, name: 'Company A', role: 'Role at Company A', description: 'Detailed info about Company A', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Company B', role: 'Role at Company B', description: 'Detailed info about Company B', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Company C', role: 'Role at Company C', description: 'Detailed info about Company C', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Company D', role: 'Role at Company D', description: 'Detailed info about Company D', image: 'https://via.placeholder.com/300' },
  ];

  const miscellaneousWorks = [
    { id: 1, title: 'Misc Work One', short: 'Short description', long: 'Detailed info with image', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Misc Work Two', short: 'Short description', long: 'Detailed info with image', image: 'https://via.placeholder.com/300' },
  ];

  const personalWebsite = 'https://yourwebsite.com';

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* NAV */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg text-green-700">AJ</a>
          <nav className="flex gap-6 text-sm text-gray-700">
            <a href="#experience" className="hover:text-green-600">Experience</a>
            <a href="#projects" className="hover:text-green-600">Projects</a>
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-32">
        {/* HERO */}
        <motion.section id="home" className="space-y-6 flex flex-col md:flex-row items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="flex-shrink-0 w-36 h-36 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-bold text-xl">Photo</div>
          <div>
            <h1 className="text-4xl font-bold text-green-800">Hi, I'm AJ.</h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              I’m a robotics and software engineer who loves building reliable systems,
              exploring autonomy, and sharing what I learn along the way.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaGithub size={20} /></a>
              <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaYoutube size={20} /></a>
              <a href={personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </motion.section>

        {/* ABOUT PARAGRAPH ABOVE EXPERIENCE */}
        <motion.section className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Placeholder paragraph: Add more about yourself here. Share your passions, career highlights, or philosophy.
          </p>
        </motion.section>

        {/* PROFESSIONAL EXPERIENCE */}
        <motion.section id="experience" className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-green-700">Professional Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companies.map(company => (
              <motion.div key={company.id} className="border border-green-200 rounded-xl p-4 hover:border-green-400 transition flex flex-col items-center gap-4 cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => setSelectedCompany(company)}>
                <div className="w-40 h-40 bg-green-100 flex items-center justify-center rounded-full text-green-500 font-bold text-xl">Logo</div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{company.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-green-700">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map(project => (
              <motion.div key={project.id} className="border border-green-200 rounded-xl p-4 hover:border-green-400 transition flex flex-col items-center gap-4 cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => setSelectedProject(project)}>
                <div className="w-40 h-40 bg-green-100 flex items-center justify-center rounded-full text-green-500 font-bold text-xl">Image</div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.short}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MISCELLANEOUS WORKS */}
        <motion.section id="misc" className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-green-700">Miscellaneous Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {miscellaneousWorks.map(work => (
              <motion.div key={work.id} className="border border-green-200 rounded-xl p-4 hover:border-green-400 transition flex flex-col items-center gap-4 cursor-pointer" whileHover={{ scale: 1.02 }}>
                <div className="w-40 h-40 bg-green-100 flex items-center justify-center rounded-full text-green-500 font-bold text-xl">Image</div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">{work.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{work.short}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section id="about" className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-green-700">About Me</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Minimal about section. Mention your background, interests, and projects.
          </p>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-green-700">Contact</h2>
          <p className="text-gray-600 text-sm max-w-xl">Want to reach out? Send me an email:</p>
          <a href="mailto:your.email@example.com" className="text-green-700 underline text-sm">your.email@example.com</a>
        </motion.section>
      </main>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div className="bg-white rounded-xl p-6 max-w-lg w-full relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-900" onClick={() => setSelectedProject(null)}>✕</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">{selectedProject.title}</h3>
            <p className="text-gray-600">{selectedProject.long}</p>
          </motion.div>
        </div>
      )}

      {/* COMPANY MODAL */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div className="bg-white rounded-xl p-6 max-w-lg w-full relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-900" onClick={() => setSelectedCompany(null)}>✕</button>
            <img src={selectedCompany.image} alt={selectedCompany.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">{selectedCompany.name}</h3>
            <p className="text-gray-600">{selectedCompany.description}</p>
          </motion.div>
        </div>
      )}

      <footer className="py-10 text-center text-xs text-gray-500 border-t border-green-200">
        © {new Date().getFullYear()} AJ. Minimal + green.
      </footer>
    </div>
  );
}
