import React from 'react';

export default function BotLabContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/B0mL6WQhMzk"
        title="BotLab Challenge"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded"
      ></iframe>

      <p>
        For my Autonomous Robotics Laboratory course, our team competed in the Bot Escape Challenge using the UofM April Lab’s MAEbot platform.
      </p>

      <p>
        Algorithms implemented:
      </p>

      <ul className="list-disc list-inside">
        <li>A* Path Planning</li>
        <li>Occupancy Grid Mapping</li>
        <li>MonteCarlo Localization</li>
        <li>PID Control</li>
      </ul>
    </div>
  );
}
