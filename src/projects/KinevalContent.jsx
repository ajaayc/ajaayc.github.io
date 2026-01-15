// projects/KinvevalContent.jsx
import React from 'react';

export default function KinvevalContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/RRT_Planner.png" alt="RRT Planner" className="w-full max-w-sm rounded" />
        <a href="https://www.youtube.com/watch?v=5dlWKZdV9mo">
          <img src="img/RRTConnect_2D_Kineval.png" alt="RRT-Connect 2D Kineval" className="w-full max-w-sm rounded" />
        </a>
      </div>

      <p>
        For my Robot Kinematics and Dynamics course, I implemented various robotics algorithms in the <a href="https://github.com/autorob/kineval-stencil" className="text-blue-600 font-semibold hover:underline">Kineval</a> simulation framework, a Three.js-based platform made by Professor <a href="http://ohseejay.org/" className="text-blue-600 font-semibold hover:underline">Chad Jenkins</a>.
      </p>

      <p>
        In order to better understand the modeling and control of autonomous agents, I implemented the following features in the framework:
      </p>

      <ul className="list-disc pl-5">
        <li>Path planning via A* algorithm</li>
        <li>Euler and velocity verlet integrator and a PID controller for an inverted pendulum</li>
        <li><a href="https://www.youtube.com/watch?v=7wcBHTCha5o" className="text-blue-600 font-semibold hover:underline">Finite state machine "dance controller"</a></li>
        <li>Forward kinematics via quaternions and homogeneous matrix transformations</li>
        <li><a href="https://www.youtube.com/watch?v=1tOVkg2UzNM" className="text-blue-600 font-semibold hover:underline">Inverse kinematics</a> via the Jacobian transpose and Jacobian pseudo-inverse methods</li>
        <li>Motion planning via RRT and <a href="https://www.youtube.com/watch?v=5dlWKZdV9mo" className="text-blue-600 font-semibold hover:underline">RRT-Connect algorithms in 2D</a> and 3D workspaces</li>
      </ul>

      <div className="w-full aspect-video mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1tOVkg2UzNM"
          title="Kineval Inverse Kinematics"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>
    </div>
  );
}
