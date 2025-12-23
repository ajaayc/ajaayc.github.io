import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import ProjectModal from './modals/ProjectModal';
import CompanyModal from './modals/CompanyModal';
import RRTPromptPanel from './RRTPromptPanel';
import RRTAnimationPanel from './RRTAnimationPanel';

export default function AJPortfolioPanel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [rrtStarted, setRrtStarted] = useState(false);

  const handleStartRRT = () => {
    setRrtStarted(true);
  };

  const projects = [
  {
    id: 1,
    title: 'MDOT Lane Marking Evaluation',
    short: 'Evaluated lane markings using LiDAR data',
    long: 'Performed a detailed evaluation of lane markings using LiDAR and computer vision techniques. The study included data preprocessing, feature extraction, and automated analysis to assess the condition and visibility of lane markings across highways.',
    date: 'Sept 2016 - Dec 2016',
    images: ['/img/velodyne.png', 'https://via.placeholder.com/300x180'],
    paperLink: 'https://example.com/mdot-paper.pdf',
    codeLink: 'https://github.com/example/mdot-lane-marking',
  },
  {
    id: 2,
    title: 'Autonomous Parking Assistant',
    short: 'Developed parking assistance algorithms',
    long: 'Created a system that uses camera and sensor data to assist in automated parking. Implemented path planning, collision detection, and steering control. Tested extensively on real vehicles with varying parking scenarios.',
    date: 'Jan 2017 - Jun 2017',
    images: ['https://via.placeholder.com/300x180'],
    // No paper or code link provided
  },
  {
    id: 3,
    title: 'Traffic Sign Recognition',
    short: 'Machine learning for traffic sign detection',
    long: 'Implemented a convolutional neural network (CNN) to detect and classify traffic signs from dashcam videos. Achieved high accuracy and robust performance under different lighting and weather conditions.',
    date: 'Jul 2017 - Dec 2017',
    images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'],
    paperLink: 'https://example.com/traffic-sign-paper.pdf',
    // No code link
  },
  {
    id: 4,
    title: 'Vehicle Trajectory Prediction',
    short: 'Predicting vehicle motion in traffic',
    long: 'Developed models to predict vehicle trajectories using historical motion data and sensor inputs. Applied recurrent neural networks (RNNs) and probabilistic models to improve prediction accuracy.',
    date: 'Jan 2018 - Mar 2018',
    images: ['https://via.placeholder.com/300x180'],
    codeLink: 'https://github.com/example/vehicle-trajectory',
    // No paper link
  },
];

  const companies = [
    {
      id: 1,
      name: 'Company A',
      role: 'Role at Company A',
      description: 'Detailed info about Company A',
      images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'],
    },
    {
      id: 2,
      name: 'Company B',
      role: 'Role at Company B',
      description: 'Detailed info about Company B',
      images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'],
    },
    {
      id: 3,
      name: 'Company C',
      role: 'Role at Company C',
      description: 'Detailed info about Company C',
      images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'],
    },
    {
      id: 4,
      name: 'Company D',
      role: 'Role at Company D',
      description: 'Detailed info about Company D',
      images: ['https://via.placeholder.com/300x180', 'https://via.placeholder.com/300x180'],
    },
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
          I am a software engineering professional with a background in robotic-systems development for the automotive and defense industries.
          <br></br><br></br>I pursued my bachelors in computer science and my masters in electrical and computer engineering at the University of Michigan in Ann Arbor, MI.
          <br></br><br></br>Professional Hobbies include tinkering with all kinds of software and hardware systems, architecting robust software (especially for autonomous systems), and playing with the language of mathematics.
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE CARDS */}
        <section id="experience" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Professional Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                onClick={() => setSelectedCompany(company)}
                className="border border-green-200 rounded-xl p-4 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
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
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="border border-green-200 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-36 bg-green-100 flex items-center justify-center text-green-500 font-bold text-xl">Image</div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>

                {/* Date interval */}
                {project.date && <p className="text-xs text-gray-500">{project.date}</p>}

                {/* Short description */}
                <p className="text-sm text-gray-600">{project.short}</p>
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



        {/* RRT Animation Section */}
        <section id="rrt" className="py-16 px-0 -mx-6">
          {!rrtStarted && (
            <RRTPromptPanel height={400} onStart={handleStartRRT} />
          )}
          {rrtStarted && (
            <RRTAnimationPanel navbarId="navbar" />
          )}
        </section>
      </main>

      {/* Modals */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedCompany && <CompanyModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />}
    </div>
  );
}
