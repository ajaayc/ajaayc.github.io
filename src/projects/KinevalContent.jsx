import React from 'react';

export default function KinvevalContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/RRT_Planner.png" alt="RRT Planner" className="w-full rounded" />
      <a href="https://www.youtube.com/watch?v=5dlWKZdV9mo">
        <img src="img/RRTConnect_2D_Kineval.png" alt="RRT-Connect in Kineval" className="w-full rounded" />
      </a>

      <p>
        Implemented various robotics algorithms in the Kineval simulation framework. Features included:
      </p>

      <ul className="list-disc list-inside">
        <li>Path planning via A* algorithm</li>
        <li>Euler and velocity verlet integrator with PID for inverted pendulum</li>
        <li><a href="https://www.youtube.com/watch?v=7wcBHTCha5o" className="text-blue-600 hover:underline">Finite state machine "dance controller"</a></li>
        <li>Forward kinematics via quaternions and homogeneous matrix transformations</li>
        <li><a href="https://www.youtube.com/watch?v=1tOVkg2UzNM" className="text-blue-600 hover:underline">Inverse kinematics</a></li>
        <li>Motion planning via RRT and RRT-Connect in 2D and 3D workspaces</li>
      </ul>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1tOVkg2UzNM"
        title="Kineval demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded"
      ></iframe>
    </div>
  );
}
