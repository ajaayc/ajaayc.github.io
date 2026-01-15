import React from 'react';

export default function PIDControllerContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BY0sY5yXz3I"
        title="PID Controller Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded"
      ></iframe>

      <p>
        For my Control Systems Design course, I built a PID controller in Simulink to control a magnetically levitated ball.
      </p>

      <p>
        After deriving the physical model of magnetic and gravitational forces, I linearized it around the steady-state input and tuned the PID controller for steady-state error, settling time, and overshoot.
      </p>
    </div>
  );
}
