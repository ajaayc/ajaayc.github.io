import React from 'react';

export default function CollisionContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/env_setup.png" alt="Simulation Environment" className="w-full rounded" />
      <img src="img/motion_pic.PNG" alt="Motion Planning" className="w-full rounded" />

      <p>
        For my Motion Planning course, I implemented a Gaussian Mixture Model-based algorithm in C++ to estimate the probability of collision for a robot following a pre-generated path.
      </p>

      <p>
        This helps quantify the safety of a motion plan before execution. Existing methods were computationally expensive, running thousands of Monte-Carlo simulations. My approach provides faster estimation.
      </p>

      <p>
        The algorithm used OpenRAVE and Armadillo C++ libraries to simulate a linear feedback controller and an Extended Kalman Filter for a PR2 robot.
      </p>
    </div>
  );
}
