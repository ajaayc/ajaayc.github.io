// projects/PlybotTestbed.jsx
import React from 'react';

export default function PlybotTestbed() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <img src="img/plybot2.jpg" alt="Plybot prototype" className="w-full max-w-sm rounded" />
      </div>

      <p>
        I am working on an autonomous robotic platform that will eventually serve as my own personal testbed for implementing and evaluating algorithms for:
      </p>

      <ul className="list-disc pl-5">
        <li>Localization and mapping</li>
        <li>Motion planning</li>
        <li>Reinforcement learning (After training models via simulation)</li>
        <li>Control</li>
        <li>Computer vision</li>
      </ul>

      <p>
        This is a side project which I am personally directing in order to further expand my practical knowledge of electrical circuitry and embedded systems as well as implementations of algorithms for autonomous robotics.
      </p>

      <p>
        The images above depict an initial prototype (work in progress) that will be controlled by the <a href="https://www.ti.com/store/ti/en/p/product/?p=MSP-EXP430FR6989" className="text-blue-600 font-semibold hover:underline">MSP-EXP430FR6989</a> microcontroller board.
      </p>

      <p>
        I have plans to eventually migrate to a prototype that would use one of the <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/" className="text-blue-600 font-semibold hover:underline">NVIDIA Jetson</a> products and the Robot Operating System (ROS) framework.
      </p>

      <p>
        I received inspiration for this project from the <a href="https://www.amazon.com/Robot-Builders-Bonanza-Gordon-McComb/dp/1260135012" className="text-blue-600 font-semibold hover:underline">Robot Builder's Bonanza</a>, authored by the late roboticist Gordan McComb. <a href="https://www.amazon.com/Practical-Electronics-Inventors-Fourth-Scherz/dp/1259587541" className="text-blue-600 font-semibold hover:underline">Practical Electronics for Inventors</a> has also been a very useful resource.
      </p>

      <p>
        I look forward to linking interesting videos of the Plybot Testbed in the near future as I make more progress on it. I plan to make the code and schematics publically available on Github for anyone who desires to replicate it.
      </p>
    </div>
  );
}
