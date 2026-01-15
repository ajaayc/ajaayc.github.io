import React from 'react';

export default function PlybotContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/plybot2.jpg" alt="Plybot prototype" className="w-full rounded" />
      
      <p>
        Project in progress as of Sept 2023. I am working on an autonomous robotic platform 
        that will serve as my personal testbed for implementing and evaluating algorithms for:
      </p>

      <ul className="list-disc list-inside">
        <li>Localization and mapping</li>
        <li>Motion planning</li>
        <li>Reinforcement learning (After training models via simulation)</li>
        <li>Control</li>
        <li>Computer vision</li>
      </ul>

      <p>
        This side project is personally directed to further expand my practical knowledge of 
        electrical circuitry and embedded systems as well as implementations of algorithms for autonomous robotics.
      </p>

      <p>
        The prototype is currently controlled by the <a href="https://www.ti.com/store/ti/en/p/product/?p=MSP-EXP430FR6989" className="text-blue-600 hover:underline">MSP-EXP430FR6989</a> microcontroller. I plan to migrate to a NVIDIA Jetson system using ROS in the future.
      </p>
    </div>
  );
}
