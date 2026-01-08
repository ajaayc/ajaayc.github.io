import React, { useState, useRef } from 'react';
import LeftPanel from './LeftPanel';
import ProjectModal from './modals/ProjectModal';

export default function AJPortfolioPanel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

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
      name: 'Neya',
      role: 'Robotics Software Engineer',
      description: 'Working on U.S. Army Ground Vehicle Systems Center projects.',
      backgroundImage: '/img/company_img/neya_splash.png',
      logo: '/img/company_img/neya_systems_logo.jpeg',
      links: [
        { name: 'Neya Systems', url: 'https://neyarobotics.com/' },
        { name: 'GVSC DEVCOM', url: 'https://gvsc.devcom.army.mil/' },
      ],
    },
    {
      id: 2,
      name: 'Stellantis',
      role: 'AI Motion Planning Software Engineer',
      description: 'Working on STLA AutoDrive platform.',
      backgroundImage: '/img/company_img/stla_brain.jpg',
      logo: '/img/company_img/stellantis.svg',
      links: [
        { name: 'Stellantis', url: 'https://www.stellantis.com/en' },
        { name: 'STLA AutoDrive', url: 'https://europe.autonews.com/automakers/stellantis-launches-23-billion-software-push' },
      ],
    },
    {
      id: 3,
      name: 'Epic',
      role: 'Software Developer',
      description: 'Working on Epic ASAP electronic medical record software.',
      backgroundImage: '/img/company_img/epic_hyperspace.jpg',
      logo: '/img/company_img/epic_logo.png',
      links: [
        { name: 'Epic', url: 'https://www.epic.com/' },
        { name: 'Epic ASAP', url: 'https://www.epic.com/software/specialty-care' },
      ],
    },
    {
      id: 4,
      name: 'UMTRI',
      role: 'Graduate Student',
      description: 'Working on software/hardware system that interfaces with Lidar, camera, GPS, and Mobileye.',
      backgroundImage: '/img/company_img/mcity.jpg',
      logo: '/img/company_img/umtri_logo.png',
      links: [
        { name: 'UMTRI', url: 'https://www.umtri.umich.edu/' },
      ],
    },
  ];



  return (
    <div className="flex flex-1 bg-white text-gray-900 font-sans antialiased">

      {/* Main Content */}
      <main className="flex-1 max-w-full mx-auto px-6 py-16">
        {/* ABOUT */}
        <section id="about" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">About Me</h2>
          <p className="text-gray-600 leading-loose text-2xl max-w-full" style={{ whiteSpace: 'pre-line' }}>
            {`I am a software engineer, roboticist, and AI enthusiast with a background in software development and mathematics. I pursued my bachelors in computer science and my masters in electrical and computer engineering at the University of Michigan in Ann Arbor, MI.

            Professional hobbies include tinkering with all kinds of software and hardware systems, architecting robust software (especially for autonomous systems), and playing with the language of mathematics.
              
            Personal hobbies include Latin dancing, hunting for treasure, traveling, and reading an assortment of fiction and non-fiction texts.

            My first name Ajaay is a modification of the Indian name Ajay. I tell everyone to just call me AJ (Ay-Jay)!
              
            My last name Chandrasekaran is based on the Indian name Chandrasekhar. I pronounce it as Chan-dra-say-ker-in.
              
            This site serves primarily as a personal portfolio of various projects that I have worked on.`}
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE CARDS */}
        <section id="experience" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Professional Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="border border-green-200 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                {/* Background image with logo overlay */}
                <div
                  className="relative w-full h-36 bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${company.backgroundImage})` }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-20 h-20 object-contain rounded bg-white/80 p-1"
                  />
                </div>
            
                {/* Content below the image */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                  {company.role && <p className="text-gray-600 text-sm mb-2">{company.role}</p>}
                  <p className="text-gray-700 text-sm mb-4">{company.description}</p>

                  {/* Action Buttons */}
                  {company.links && company.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {company.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
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
      </main>

      {/* Modals */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
