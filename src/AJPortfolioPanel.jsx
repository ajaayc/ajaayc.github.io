import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeftPanel from './LeftPanel';

export default function AJPortfolioPanel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const projects = [
    { id: 1, title: 'Project One', short: 'Short description of Project One', long: 'Detailed description with image for Project One', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 2, title: 'Project Two', short: 'Short description of Project Two', long: 'Detailed description with image for Project Two', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 3, title: 'Project Three', short: 'Short description of Project Three', long: 'Detailed description with image for Project Three', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 4, title: 'Project Four', short: 'Short description of Project Four', long: 'Detailed description with image for Project Four', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
  ];

  const companies = [
    { id: 1, name: 'Company A', role: 'Role at Company A', description: 'Detailed info about Company A', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 2, name: 'Company B', role: 'Role at Company B', description: 'Detailed info about Company B', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 3, name: 'Company C', role: 'Role at Company C', description: 'Detailed info about Company C', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
    { id: 4, name: 'Company D', role: 'Role at Company D', description: 'Detailed info about Company D', images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'] },
  ];

  return (
    <div className="flex flex-1 bg-white text-gray-900 font-sans antialiased">
      {/* Left Panel */}
      <LeftPanel />

      {/* Main Content */}
      <main className="flex-1 max-w-full mx-auto px-6 py-16">
        {/* ABOUT */}
        <section id="about" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed max-w-full">
            Placeholder paragraph: Add more about yourself here. Share your passions, career highlights, or philosophy.
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE CARDS */}
        <section id="experience" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Professional Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {companies.map(company => (
              <div key={company.id} onClick={() => setSelectedCompany(company)} className="border border-green-200 rounded-xl p-4 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-full h-36 bg-green-100 flex items-center justify-center text-green-500 font-bold text-xl">Logo</div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{company.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT CARDS */}
        <section id="projects" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} onClick={() => setSelectedProject(project)} className="border border-green-200 rounded-xl p-4 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-full h-36 bg-green-100 flex items-center justify-center text-green-500 font-bold text-xl">Image</div>
                <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.short}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Contact</h2>
          <p className="text-gray-600 leading-relaxed max-w-full">
            Placeholder contact info.
          </p>
        </section>
      </main>

      {/* Popups */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-xl p-6 max-w-3xl w-full" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
              <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
              <div className="flex gap-2 mb-4 flex-wrap">
                {selectedProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedProject.title} ${idx+1}`} className="w-48 h-48 object-cover rounded" />
                ))}
              </div>
              <p>{selectedProject.long}</p>
              <button onClick={() => setSelectedProject(null)} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Close</button>
            </motion.div>
          </motion.div>
        )}

        {selectedCompany && (
          <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-xl p-6 max-w-3xl w-full" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
              <h3 className="text-xl font-bold mb-2">{selectedCompany.name}</h3>
              <div className="flex gap-2 mb-4 flex-wrap">
                {selectedCompany.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedCompany.name} ${idx+1}`} className="w-48 h-48 object-cover rounded" />
                ))}
              </div>
              <p>{selectedCompany.description}</p>
              <button onClick={() => setSelectedCompany(null)} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
