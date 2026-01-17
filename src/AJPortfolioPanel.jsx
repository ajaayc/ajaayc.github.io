import React, { useState, useRef } from 'react';
import LeftPanel from './LeftPanel';
import ProjectModal from './modals/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';

// Project content components
import PlybotContent from './projects/PlybotContent';
import MDOTContent from './projects/MDOTContent';
import CollisionContent from './projects/CollisionContent';
import DNNVehicleContent from './projects/DNNVehicleContent';
import MobileRoboticsContent from './projects/MobileRoboticsContent';
import TrashbotContent from './projects/TrashbotContent';
import BotLabContent from './projects/BotLabContent';
import KinevalContent from './projects/KinevalContent';
import PIDControllerContent from './projects/PIDControllerContent';
import KECContent from './projects/KECContent';
import PhlebSimulationContent from './projects/PhlebSimulationContent';
import PupperV3Content from './projects/PupperV3Content';

export default function AJPortfolioPanel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const projects = [
    {
      title: "Pupper V3",
      date: "Oct 2025 - Present",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/pupperv3_wip.jpg",
      short: null,
      long: <PupperV3Content />,
    },
    {
      title: "Plybot Testbed Initial Design",
      date: "Sept 2021 - Feb 2022",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/plybot3.jpg", // first image in PlybotContent
      short: null,
      long: <PlybotContent />,
    },
    {
      title: "MDOT Lane Marking Evaluation",
      date: "May 2017 - Jun 2018",
      paperLink: null,
      codeLink: "https://github.com/ajaayc/Velodyne-HDL-64E-Packet-Parser",
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/velodyne.png", // first image in MDOTContent
      short: null,
      long: <MDOTContent />,
    },
    {
      title: "Collision Estimation for Safe Planning",
      date: "Mar 2018 - Apr 2018",
      paperLink: "/documents/probability_of_collision_for_safe_planning.pdf",
      codeLink: "https://github.com/ajaayc/Probability-of-Collision-for-Safe-Planning",
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/env_setup.png", // first image in CollisionContent
      short: null,
      long: <CollisionContent />,
    },
    {
      title: "Deep Neural Network Vehicle Detection System",
      date: "Nov 2017 - Dec 2017",
      paperLink:
        "https://github.com/ajaayc/Car_Detection/blob/master/Perception%20Final%20Report.pdf",
      codeLink: "https://github.com/ajaayc/Car_Detection",
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/carBox.jpg", // first image in DNNVehicleContent
      short: null,
      long: <DNNVehicleContent />,
    },
    {
      title: "Mobile Robotics iSAM Implementation",
      date: "Mar 2018 - Apr 2018",
      paperLink: null,
      codeLink: "https://github.com/Scarabrine/EECS568Project_Team2_iSAM",
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/victoriaPark.png", // first image in MobileRoboticsContent
      short: null,
      long: <MobileRoboticsContent />,
    },
    {
      title: "Trashbot",
      date: "Mar 2017 - Apr 2017",
      paperLink: null,
      codeLink: "https://github.com/bonsairobo/trashbot",
      siteLink: null,
      videoLink: "https://www.youtube.com/watch?v=a6qHyMERqR0?start=29",
      posterLink: null,
      preview: "img/trashbot.jpg", // first image in TrashbotContent
      short: null,
      long: <TrashbotContent />,
    },
    {
      title: "BotLab Challenge",
      date: "Jan 2017 - Feb 2017",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: "https://www.youtube.com/watch?v=B0mL6WQhMzk",
      posterLink: null,
      preview: "https://www.youtube.com/embed/B0mL6WQhMzk", // first video in BotLabContent
      short: null,
      long: <BotLabContent />,
    },
    {
      title: "Kinveval Robot Simulator",
      date: "Sept 2016 - Dec 2016",
      paperLink: null,
      codeLink: "https://github.com/autorob/kineval-stencil",
      siteLink: null,
      videoLink: null,
      posterLink: null,
      preview: "img/RRT_Planner.png", // first image in KinevalContent
      short: null,
      long: <KinevalContent />,
    },
    {
      title: "PID Controller for Magnetically Levitated Ball",
      date: "Nov 2017 - Dec 2017",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: "https://www.youtube.com/watch?v=BY0sY5yXz3I",
      posterLink: null,
      preview: "https://www.youtube.com/embed/BY0sY5yXz3I", // first video in PIDControllerContent
      short: null,
      long: <PIDControllerContent />,
    },
    {
      title: "Cloud-Based Ocular Disease Diagnosis with Machine Learning",
      date: "Jan 2016 - Dec 2016",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: null,
      posterLink: "/documents/KECPoster.pdf",
      preview: "img/fafimage.jpg",
      short: null,
      long: <KECContent />,
    },
    {
      title: "Discrete Event Simulation of a Phlebotomy Clinic",
      date: "Jul 2015 - Feb 2016",
      paperLink: null,
      codeLink: null,
      siteLink: null,
      videoLink: "https://www.youtube.com/watch?v=b2tw21Ra3BU",
      posterLink: "/documents/phlebPoster.pdf",
      preview: "img/phlebSimulationScreenshot.png",
      short: null,
      long: <PhlebSimulationContent />,
    },
  ];

  const companies = [
    {
      id: 1,
      name: 'Neya Systems',
      role: 'Robotics Software Engineer',
      description: 'Worked on various U.S. Army Ground Vehicle Systems Center projects.',
      backgroundImage: '/img/company_img/neya_splash.png',
      logo: '/img/company_img/neya_systems_logo.jpeg',
      links: [
        { name: 'Neya Systems', url: 'https://neyarobotics.com/' },
        { name: 'GVSC DEVCOM', url: 'https://gvsc.devcom.army.mil/' },
      ],
    },
    {
      id: 2,
      name: 'Stellantis (Formerly Fiat Chrysler Automobiles)',
      role: 'Vehicle Motion Planning Software Engineer',
      description: 'Worked on STLA AutoDrive platform.',
      backgroundImage: '/img/company_img/Stellantis_AutoDrive_full.jpg',
      logo: '/img/company_img/Stellantis_logo_blue_background.jpg',
      links: [
        { name: 'Stellantis', url: 'https://www.stellantis.com/en' },
        {
          name: 'STLA AutoDrive',
          url: 'https://europe.autonews.com/automakers/stellantis-launches-23-billion-software-push',
        },
      ],
    },
    {
      id: 3,
      name: 'Epic',
      role: 'Software Developer',
      description: 'Worked on Epic ASAP electronic medical record software.',
      backgroundImage: '/img/company_img/epic_hyperspace_2.png',
      logo: '/img/company_img/epic_logo.png',
      links: [
        { name: 'Epic', url: 'https://www.epic.com/' },
        { name: 'Epic ASAP', url: 'https://www.epic.com/software/specialty-care' },
      ],
    },
    {
      id: 4,
      name: 'University of Michigan Transportation Research Institute (UMTRI)',
      role: 'Graduate Student Research Assistant',
      description:
        'Worked on software/hardware system that interfaces with Lidar, camera, GPS, and Mobileye.',
      backgroundImage: '/img/company_img/mcity.jpg',
      logo: '/img/company_img/umtri_logo.png',
      links: [{ name: 'UMTRI', url: 'https://www.umtri.umich.edu/' }],
    },
  ];

  return (
    <div className="flex flex-1 bg-white text-gray-900 font-sans antialiased">
      {/* Main Content */}
      <main className="flex-1 max-w-full mx-auto px-6 py-2">
        {/* ABOUT */}
        <section id="about" className="py-16">
          <h1 className="text-3xl font-bold text-green-700 mb-8">About Me</h1>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            I am a software engineer, roboticist, and AI enthusiast with a background in software
            development and mathematics. I pursued my bachelors in computer science and my masters
            in electrical and computer engineering at the University of Michigan in Ann Arbor, MI.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            Professional hobbies include tinkering with all kinds of software and hardware systems,
            architecting robust software (especially for autonomous systems), and playing with the
            language of mathematics.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            Personal hobbies include Latin dancing (primarily salsa and bachata),{' '}
            <a
              href="https://explorersweb.com/after-forrest-fenn-the-new-american-treasure-hunt/"
              className="text-blue-600 underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              hunting for treasure
            </a>
            , playing boardgames, traveling, and reading an assortment of fictional and
            non-fictional texts.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            My first name{' '}
            <a
              href="https://en.wikipedia.org/wiki/Ajay_(given_name)"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Ajay
            </a>{' '}
            is a modification of the Indian name Ajay. I tell everyone to just call me AJ (Ay-Jay)!
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            My last name{' '}
            <a
              href="https://en.wikipedia.org/wiki/Chandrasekhar"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Chandrasekaran
            </a>{' '}
            is based on the Indian name Chandrasekhar. I pronounce it as Chan-dra-say-ker-in.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            This site serves primarily as a personal portfolio of various projects that I have
            worked on.
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE CARDS */}
        <section id="experience" className="py-12">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Professional Experience
          </h1>

          <div
            className="grid gap-6 w-full max-w-full mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {companies.map((company) => (
              <div
                key={company.id}
                className="border border-green-200 rounded-xl overflow-hidden shadow-lg flex flex-col bg-white"
              >
                {/* Main background image at top */}
                <div
                  className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url(${company.backgroundImage})` }}
                />

                {/* Content: logo left, text right */}
                <div className="p-4 flex flex-col flex-1 min-w-0">
                  <div className="flex flex-row gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-start">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain rounded bg-white/80 p-1"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <h2 className="text-lg font-semibold text-gray-900 break-words">
                        {company.name}
                      </h2>
                      {company.role && (
                        <p className="text-gray-600 text-sm mb-2 break-words">
                          {company.role}
                        </p>
                      )}
                      <p className="text-gray-700 text-sm break-words">
                        {company.description}
                      </p>
                    </div>
                  </div>

                  {/* Links/buttons: aligned bottom-right */}
                  {company.links && company.links.length > 0 && (
                    <div className="flex flex-col mt-auto">
                      <div className="flex flex-wrap gap-2 justify-end pt-3">
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
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT CARDS */}
        <section id="projects" className="py-12">
          <h1 className="text-3xl font-bold text-green-700 mb-8">Projects</h1>
          <div
            className="grid gap-8 w-full max-w-full mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title} // using title as unique key
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="border border-green-200 rounded-xl flex flex-col hover:shadow-lg transition-shadow min-w-[300px] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Media preview */}
                <div className="w-full flex-shrink-0">
                  {project.preview.endsWith('.jpg') ||
                  project.preview.endsWith('.png') ||
                  project.preview.endsWith('.jpeg') ? (
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-t-xl"
                    />
                  ) : project.preview.startsWith('http') ? (
                    <iframe
                      src={project.preview}
                      title={project.title}
                      className="w-full h-72 md:h-80 lg:h-96 rounded-t-xl pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-72 md:h-80 lg:h-96 bg-green-100 flex items-center justify-center text-green-500 font-bold text-2xl rounded-t-xl">
                      No Preview
                    </div>
                  )}
                </div>

                {/* Text content */}
                <div className="p-6 flex-1 flex flex-col min-w-0 relative pb-12">
                  <h2 className="font-semibold text-xl text-gray-900 text-center break-words">
                    {project.title}
                  </h2>

                  {project.short && (
                    <p className="text-base text-gray-600 text-center mt-2 break-words">
                      {project.short}
                    </p>
                  )}

                  {/* Date anchored bottom-right */}
                  {project.date && (
                    <p className="absolute bottom-4 right-6 text-sm text-gray-500">
                      {project.date}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MISC WORK */}
        <section id="misc" className="py-16">
          <h1 className="text-3xl font-bold text-green-700 mb-6">Misc Work</h1>
          <h2 className="text-xl font-semibold text-green-700 mb-4">Papers</h2>
          <p className="text-gray-600 leading-relaxed max-w-full">
            <p>
              <a
                href="/documents/automation_theft_of_labor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Automation, the Thief of Labor
              </a>
            </p>
            <p>
              <a
                href="/documents/robotic_caregivers_for_the_elderly_ethical_examination.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Robotic Caregivers for the Elderly, An Ethical Examination
              </a>
            </p>
          </p>
          {/* <h2 className="text-xl font-semibold text-green-700 mb-4"> Web Development Projects </h2>  */}
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6">Contact</h1>
          <p className="text-gray-600 leading-relaxed max-w-full">
            I am best reached via email:
            <img
              src="/img/emailpic.png"
              alt="EmailPicture"
            />

            <p>I look forward to connecting with you!</p>
          </p>
        </section>
      </main>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
