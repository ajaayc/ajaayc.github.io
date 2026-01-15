// projects/BotLabChallengeContent.jsx
import React from 'react';

export default function BotLabChallengeContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B0mL6WQhMzk"
          title="BotLab Challenge"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>

      <p>
        For my Autonomous Robotics Laboratory course, I worked in a team to compete in the course's Bot Escape Challenge competition. We were given the UofM April Lab's <a href="https://april.eecs.umich.edu/maebot/" className="text-blue-600 font-semibold hover:underline">MAEbot</a> platform, and we were tasked with building algorithms to help the MaeBot explore and escape from a wooden maze enclosure.
      </p>

      <p>
        Using C++, we implemented various algorithms on the MAEbot, including:
      </p>

      <ul className="list-disc pl-5">
        <li>A* Path Planning</li>
        <li>Occupancy Grid Mapping</li>
        <li>MonteCarlo Localization</li>
        <li>PID Control</li>
      </ul>

      <p>
        The experience of implementing the algorithms on the MAEbot and competing in the class competition was very rewarding. There were many robotics concepts that I had learned from simulation and theory, but we found that implementing these algorithms on a real robot would actually be significantly more difficult.
      </p>
    </div>
  );
}
