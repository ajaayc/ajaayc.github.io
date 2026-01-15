import React, { useState, useRef } from 'react';
import LeftPanel from './LeftPanel';
import ProjectModal from './modals/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';

export default function AJPortfolioPanel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Plybot Testbed',
      date: 'In progress as of Sept 2023',
      media: [
        { type: 'image', src: '/img/plybot2.jpg', alt: 'Plybot prototype' }
      ],
      long: `
  I am working on an autonomous robotic platform that will eventually serve as my personal testbed for implementing and evaluating algorithms for:
  
  - Localization and mapping
  - Motion planning
  - Reinforcement learning (After training models via simulation)
  - Control
  - Computer vision
  
  This is a side project which I am personally directing in order to further expand my practical knowledge of electrical circuitry and embedded systems as well as implementations of algorithms for autonomous robotics.
  
  The images above depict an initial prototype (work in progress) that will be controlled by the MSP-EXP430FR6989 microcontroller board.
  
  I have plans to eventually migrate to a prototype that would use one of the NVIDIA Jetson products and the Robot Operating System (ROS) framework.
  
  I received inspiration for this project from the Robot Builder's Bonanza, authored by the late roboticist Gordan McComb. Practical Electronics for Inventors has also been a very useful resource.
  
  I look forward to linking interesting videos of the Plybot Testbed in the near future as I make more progress on it. I plan to make the code and schematics publicly available on Github for anyone who desires to replicate it.
      `,
      paperLink: null,
      codeLink: null,
    },
    {
      id: 2,
      title: 'MDOT Lane Marking Evaluation',
      date: 'May 2017 - Jun 2018',
      media: [
        { type: 'image', src: '/img/velodyne.png', alt: 'Velodyne Lidar' },
        { type: 'image', src: '/img/mobileye.JPG', alt: 'Mobileye Unit' },
        { type: 'image', src: '/img/ajaayCar.JPG', alt: 'Car equipped with sensors' },
        { type: 'video', src: 'https://www.youtube.com/embed/agMfXfZdug4', alt: 'Lane marking evaluation video' }
      ],
      long: `
  As a research assistant at the University of Michigan Transportation Research Institute in Ann Arbor, MI, I worked under Dr. Daniel Park on a project to evaluate the effectiveness of various road lanemarking materials. The project was funded by the Michigan Department of Transportation (MDOT).
  
  In 2017, a section of the US-23 highway between Ann Arbor, MI and Brighton, MI was paved with different lanemarking materials along different stretches. We planned to perform a study over a 2-year period to determine how well each lanemarking material on the highway lasted over time; we expected that the different stretches of the highway would be impacted similarly by various environmental factors, such as temperature and precipitation.
  
  To achieve our goal we required a method to take measurements of the lanemarkings' conditions on the US-23 highway once during each month so that after the 2-year period we could retrospectively analyze how the lanemarkings' conditions changed over time. Our solution to this problem was to equip a Honda Accord car with various sensors, including:
  
  - Novatel GPS
  - Quanergy M-8 Lidar
  - Mobileye unit
  - Camera
  
  We proceeded to engineer a software system that would be executed on the car to collect data of the road conditions from each of these sensors while a human operator drove the car along the US-23 highway once each month.
  
  For this project, I developed multi-threaded C++ code utilizing the VTK and PCL libraries to extract, interpret, and visualize data collected from our Lidar. We experimented with two Lidars: The Quanergy M-8 and the Velodyne HDL-64E. Each of these Lidars outputs [x,y,z] point clouds of their surroundings as well as point intensities. We were mostly interested in examining the point intensity measurements of the lanemarkings. In theory, we could see how the intensity values of the points representing lanemarkings changed over time. The degradation of the highway pavement by the Michigan weather would result in lower intensity points returned by the Lidar for various lanemarking materials.
  
  I also developed C++ code to interface with our car's Mobileye unit via the vehicle's CAN message network. The Mobileye communicated data regarding the status of the left and right lanemarkings on the road in front of the driver. Its data arrived in real time as a sequence of bytes that needed to be converted into a human readable format.
  
  Finally, I facilitated the collection of data from all four of our sensors simultaneously by helping to create a single module that would run all four sensor collection programs together as individual threads of a single CPU process. The module ran on a single HP i7 laptop during each of the car's monthly drives.
  
  I was very proud of our final software system. This project necessitated a wonderful combination of both robotics and computer science knowledge.
      `,
      paperLink: 'https://github.com/ajaayc/Velodyne-HDL-64E-Packet-Parser',
      codeLink: 'https://github.com/ajaayc/Velodyne-HDL-64E-Packet-Parser',
    },
    {
      id: 3,
      title: 'Collision Estimation for Safe Planning',
      date: 'Mar 2018 - Apr 2018',
      media: [
        { type: 'image', src: '/img/env_setup.png', alt: 'Simulation environment setup' },
        { type: 'image', src: '/img/motion_pic.PNG', alt: 'Motion plan snapshot' }
      ],
      long: `
  For my Motion Planning course, I devised and implemented a Gaussian Mixture Model-based algorithm in C++ to expand upon existing methods to estimate the probability that a robot following a pre-generated motion plan would collide with an obstacle.
  
  The motivation for this work is that a robot can benefit from quantifying the approximate safety of a motion plan before executing it. While a motion planner should generate a collision-free path, collisions may be possible as the robot follows the path due to natural uncertainty in the data it receives from its sensors and random noise in how it makes movements. Given a probability of collision before executing a motion plan, a robot can either execute it or revise the plan until it can find a "safer" plan.
  
  Existing methods to compute the exact probability of collision for a motion plan rely on running thousands of Monte-Carlo simulations of the robot following the motion plan, which is computationally expensive. The goal of this work is to accurately estimate the probability of collision in a shorter amount of time.
  
  For this work, I utilized the OpenRAVE simulation framework and Armadillo C++ linear algebra library to simulate a linear feedback controller and an Extended Kalman Filter estimate for the position of a PR2 robot as it attempted to follow a pre-generated motion plan. I performed experiments to examine my algorithm's performance and presented my research in a paper and a conference talk.
  
  Unfortunately, my algorithm did not perform as well as I had hoped, but I learned much from the experience in regards to conducting independent research. I plan to work more on my algorithm in the future to improve its accuracy in estimating a probability of collision for a motion plan.
      `,
      paperLink: 'resources/ajaay_paper.pdf',
      codeLink: 'https://github.com/ajaayc/Probability-of-Collision-for-Safe-Planning',
    },
    {
      id: 4,
      title: 'Deep Neural Network Vehicle Detection System',
      date: 'Nov 2017 - Dec 2017',
      media: [
        { type: 'image', src: '/img/carBox.jpg', alt: 'Detected car bounding boxes' },
        { type: 'image', src: '/img/graph.png', alt: 'Training performance graph' }
      ],
      long: `
  For my Self-Driving Cars course, I worked in a team to implement a classifier to count the number of cars in an arbitrary image generated from Grand Theft Auto (GTA) simulation. We utilized the TensorFlow Python Object Detector API on AWS EC2 GPU instances to train a fast-RCNN with 50 layers. We trained the RCNN on ~6,000 training images with known bounding box locations of cars and we specified two classifications for a detected object: {Car, Not Car}.
  
  Using our model, my team ranked 5th place among 35 teams in the class competition by achieving a 63% mean absolute error on the instructor's test set of GTA images with unknown car counts.
      `,
      paperLink: 'https://github.com/ajaayc/Car_Detection/blob/master/Perception%20Final%20Report.pdf',
      codeLink: 'https://github.com/ajaayc/Car_Detection',
    },
    {
      id: 5,
      title: 'Mobile Robotics iSAM Implementation',
      date: 'Mar 2018 - Apr 2018',
      media: [
        { type: 'image', src: '/img/victoriaPark.png', alt: 'Victoria Park dataset' },
        { type: 'image', src: '/img/JCBB.png', alt: 'JCBB algorithm visualization' }
      ],
      long: `
  For my Mobile Robotics course, I worked in a team to implement the incremental smoothing and mapping (iSAM) approach to the Simultaneous Localization and Mapping (SLAM) problem.
  
  Prior to working on this project, I had implemented various state estimation algorithms in Matlab for localization, including the Extended Kalman Filter, Unscented Kalman Filter, and Particle Filter. This project was unique for me in that it was the first smoothing algorithm I worked with to tackle the SLAM problem. Filtering approaches to SLAM generally estimate the current state of a robot given a sequence of past measurements and actions. However, smoothing approaches improve upon the estimates of the entire sequence of the current and past states of the robot, considering the sequence as an overarching model to be smoothed.
  
  My main contribution to this project was in the implementation of the joint compatibility branch and bound (JCBB) algorithm for data association. At a single point in time, given a set of N robot sensor measurements and M landmarks, the JCBB algorithm examines various combinations of sensor-landmark mappings and uses the Mahalanobis Distance metric to determine which measurements are most likely to be associated with which landmarks.
  
  We applied the iSAM algorithm on the Victoria Park dataset. The JCBB algorithm proved to be more effective than standard data association methods when we applied it within the iSAM algorithm on the dataset.
      `,
      paperLink: null,
      codeLink: 'https://github.com/Scarabrine/EECS568Project_Team2_iSAM',
    },
    {
      id: 6,
      title: 'Trashbot',
      date: 'Mar 2017 - Apr 2017',
      media: [
        { type: 'video', src: 'https://www.youtube.com/embed/a6qHyMERqR0?start=29', alt: 'Trashbot video' },
        { type: 'image', src: '/img/trashbot.jpg', alt: 'Trashbot top view' },
        { type: 'image', src: '/img/insideTrashbot.jpg', alt: 'Trashbot internal view' }
      ],
      long: `
  For my Autonomous Robotics Laboratory senior design course, I collaborated with a team to build a robot that autonomously navigates and detects and removes trash in its environment. The motivation for this project stemmed from noticing the plethora of trash across the UofM campus during football Saturdays. In theory, we could deploy a fleet of these trash collecting robots after a football game to pick up and dispose of various pieces of trash.
  
  We built the robot over a span of 2 months, and it was comprised of various hardware subsystems, including:
  
  - A MagicBot base
  - An Arduino and motor controllers
  - A robotic arm
  - A Microsoft Kinect
  - A PS2 Controller
  
  My major contribution to this project was in engineering the TrashBot's robotic arm to pick up various objects. My teammate programmatically analyzed point clouds of data from the Microsoft Kinect attached to the robot, and he provided data to the robotic arm representing the centroids of various objects.
  
  Given the [x,y,z] position of an object centroid in the frame of the Kinect coordinate system, I used Python to apply homogeneous matrix transformations to convert the coordinates to the frame of the robotic arm's coordinate system. Following that, I implemented a trigonometry-based inverse kinematics algorithm to determine the joint angles that the arm would need in order to position its end-effector (claw) over that object's centroid point. Finally, I implemented a state machine to facilitate the movement of the arm to pick up and dispose of an object into the TrashBot's onboard trash receptacle without collisions.
  
  This experience gave me the opportunity to work with various physical components and it made me very comfortable with getting my hands dirty. We enjoyed many trips to the local hardware store to piece this robot together. It was very rewarding to see the final product!
      `,
      paperLink: null,
      codeLink: 'https://github.com/bonsairobo/trashbot',
    },
    {
      id: 7,
      title: 'BotLab Challenge',
      date: 'Jan 2017 - Feb 2017',
      media: [
        { type: 'video', src: 'https://www.youtube.com/embed/B0mL6WQhMzk', alt: 'BotLab Challenge video' }
      ],
      long: `
  For my Autonomous Robotics Laboratory course, I worked in a team to compete in the course's Bot Escape Challenge competition. We were given the UofM April Lab's MAEbot platform, and we were tasked with building algorithms to help the MAEbot explore and escape from a wooden maze enclosure.
  
  Using C++, we implemented various algorithms on the MAEbot, including:
  
  - A* Path Planning
  - Occupancy Grid Mapping
  - MonteCarlo Localization
  - PID Control
  
  The experience of implementing the algorithms on the MAEbot and competing in the class competition was very rewarding. There were many robotics concepts that I had learned from simulation and theory, but we found that implementing these algorithms on a real robot would actually be significantly more difficult.
      `,
      paperLink: null,
      codeLink: null,
    },
    {
      id: 8,
      title: 'Kinveval Robot Simulator',
      date: 'Sept 2016 - Dec 2016',
      media: [
        { type: 'image', src: '/img/RRT_Planner.png', alt: 'RRT Planner' },
        { type: 'image', src: '/img/RRTConnect_2D_Kineval.png', alt: 'RRTConnect 2D Kineval' },
        { type: 'video', src: 'https://www.youtube.com/embed/1tOVkg2UzNM', alt: 'Inverse kinematics demo' }
      ],
      long: `
  For my Robot Kinematics and Dynamics course, I implemented various robotics algorithms in the Kineval simulation framework, a Three.js-based platform made by Professor Chad Jenkins.
  
  In order to better understand the modeling and control of autonomous agents, I implemented the following features in the framework:
  
  - Path planning via A* algorithm
  - Euler and velocity verlet integrator and a PID controller for an inverted pendulum
  - Finite state machine "dance controller"
  - Forward kinematics via quaternions and homogeneous matrix transformations
  - Inverse kinematics via the Jacobian transpose and Jacobian pseudo-inverse methods
  - Motion planning via RRT and RRT-Connect algorithms in 2D and 3D workspaces
      `,
      paperLink: 'https://github.com/autorob/kineval-stencil',
      codeLink: null,
    },
    {
      id: 9,
      title: 'PID Controller for Magnetically Levitated Ball',
      date: 'Nov 2017 - Dec 2017',
      media: [
        { type: 'video', src: 'https://www.youtube.com/embed/BY0sY5yXz3I', alt: 'PID Controller for MagLev Ball' }
      ],
      long: `
  For my Control Systems Design course, I worked in a team to build a PID controller in Simulink to control the position of a magnetically levitated ball. Building the controller required first deriving a physical model consisting of the magnetic and gravitational forces acting upon the ball. After deriving the physical model, we linearized the model about the input current required to cause the magnetic force to keep the ball at a constant height. Following that, we tuned our PID controller to meet specifications for steady-state error, settling time, and overshoot.
      `,
      paperLink: null,
      codeLink: null,
    }
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
        { name: 'STLA AutoDrive', url: 'https://europe.autonews.com/automakers/stellantis-launches-23-billion-software-push' },
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
      description: 'Worked on software/hardware system that interfaces with Lidar, camera, GPS, and Mobileye.',
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
          <h2 className="text-3xl font-extrabold text-green-800 mb-8">About Me</h2>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            I am a software engineer, roboticist, and AI enthusiast with a background in software development and mathematics. I pursued my bachelors in computer science and my masters in electrical and computer engineering at the University of Michigan in Ann Arbor, MI.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            Professional hobbies include tinkering with all kinds of software and hardware systems, architecting robust software (especially for autonomous systems), and playing with the language of mathematics.
          </p>

          <p className="text-gray-700 leading-relaxed text-xl max-w-full mb-8">
            Personal hobbies include Latin dancing, hunting for treasure, traveling, and reading an assortment of fiction and non-fiction texts.
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
            This site serves primarily as a personal portfolio of various projects that I have worked on.
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE CARDS */}
        <section id="experience" className="py-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Professional Experience</h2>

          <motion.div
            className="grid gap-6 w-full max-w-full mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            layout
          >
            {companies.map((company) => (
              <motion.div
                key={company.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="border border-green-200 rounded-xl overflow-hidden shadow-lg flex flex-col bg-white"
              >
                {/* Main background image at top */}
                <div
                  className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url(${company.backgroundImage})` }}
                />

                {/* Content: logo left, text right */}
                <div className="p-4 flex flex-row gap-4 min-w-0">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-start">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain rounded bg-white/80 p-1"
                    />
                  </div>

                  {/* Text and buttons */}
                  <div className="flex-1 flex flex-col min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 break-words">{company.name}</h3>
                    {company.role && (
                      <p className="text-gray-600 text-sm mb-2 break-words">{company.role}</p>
                    )}
                    <p className="text-gray-700 text-sm mb-4 break-words">{company.description}</p>

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
              </motion.div>
            ))}
          </motion.div>
        </section>

 {/* PROJECT CARDS */}
<section id="projects" className="py-16">
  <h2 className="text-2xl font-bold text-green-700 mb-8">Projects</h2>
  <div
    className="grid gap-8 w-full max-w-full mx-auto"
    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} // min width updated
  >
    {projects.map((project) => {
      const firstMedia = project.media && project.media.length > 0 ? project.media[0] : null;

      return (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="border border-green-200 rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow min-w-[300px]"
          onClick={() => setSelectedProject(project)}
        >
          {/* Media preview */}
          {firstMedia ? (
            firstMedia.type === 'image' ? (
              <img
                src={firstMedia.src}
                alt={firstMedia.alt || project.title}
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded"
              />
            ) : firstMedia.type === 'video' ? (
              <iframe
                src={firstMedia.src}
                title={firstMedia.alt || project.title}
                className="w-full h-64 md:h-72 lg:h-80 rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : null
          ) : (
            <div className="w-full h-64 md:h-72 lg:h-80 bg-green-100 flex items-center justify-center text-green-500 font-bold text-2xl">
              No Preview
            </div>
          )}

          {/* Title */}
          <h3 className="font-semibold text-xl text-gray-900 text-center break-words">{project.title}</h3>

          {/* Date interval */}
          {project.date && <p className="text-sm text-gray-500">{project.date}</p>}

          {/* Short description */}
          {project.short && <p className="text-base text-gray-600 text-center">{project.short}</p>}
        </motion.div>
      );
    })}
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
