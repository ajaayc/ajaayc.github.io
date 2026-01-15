// projects/CollisionEstimationContent.jsx
import React from 'react';

export default function CollisionEstimationContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/env_setup.png" alt="Environment setup" className="w-full max-w-sm rounded" />
        <img src="img/motion_pic.PNG" alt="Motion planning visualization" className="w-full max-w-sm rounded" />
      </div>

      <p>
        For my Motion Planning course, I devised and implemented a Gaussian Mixture Model-based algorithm in C++ to expand upon existing methods to estimate the probability that a robot following a pre-generated motion plan would collide with an obstacle.
      </p>

      <p>
        The motivation for this work is that a robot can benefit from quantifying the approximate safety of a motion plan before executing it. While a motion planner should generate a collision-free path, collisions may be possible as the robot follows the path due to natural uncertainty in the data it receives from its sensors and random noise in how it makes movements. Given a probability of collision before executing a motion plan, a robot can either execute it or revise the plan until it can find a "safer" plan.
      </p>

      <p>
        Existing methods to compute the exact probability of collision for a motion plan rely on running thousands of Monte-Carlo simulations of the robot following the motion plan, which is computationally expensive. The goal of this work is to accurately estimate the probability of collision in a shorter amount of time.
      </p>

      <p>
        For this work, I utilized the OpenRAVE simulation framework and Armadillo C++ linear algebra library to simulate a linear feedback controller and an Extended Kalman Filter estimate for the position of a PR2 robot as it attempted to follow a pre-generated motion plan. I performed experiments to examine my algorithm's performance and presented my research in a paper and a conference talk.
      </p>

      <p>
        Unfortunately, my algorithm did not perform as well as I had hoped, but I learned much from the experience in regards to conducting independent research. I plan to work more on my algorithm in the future to improve its accuracy in estimating a probability of collision for a motion plan.
      </p>
    </div>
  );
}
