// projects/PIDMagLevBallContent.jsx
import React from 'react';

export default function PIDMagLevBallContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BY0sY5yXz3I"
          title="PID Controller for Magnetically Levitated Ball"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>

      <p>
        For my Control Systems Design course, I worked in a team to build a PID controller in Simulink to control the position of a magnetically levitated ball. </p>
      <p>Building the controller required first deriving a physical model consisting of the magnetic and gravitational forces acting upon the ball. After deriving the physical model, we linearized the model about the input current required to cause the magnetic force to keep the ball at a constant height. Following that, we tuned our PID controller to meet specifications for steady-state error, settling time, and overshoot.
      </p>
    </div>
  );
}
