// projects/MobileRoboticsISAMContent.jsx
import React from 'react';

export default function MobileRoboticsISAMContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/victoriaPark.png" alt="Victoria Park dataset" className="w-full max-w-sm rounded" />
        <img src="img/JCBB.png" alt="JCBB algorithm visualization" className="w-full max-w-sm rounded" />
      </div>

      <p>
        For my Mobile Robotics course, I worked in a team to implement the <a href="https://www.cc.gatech.edu/~kaess/pub/Kaess08tro.pdf" className="text-blue-600 font-semibold hover:underline">incremental smoothing and mapping</a> approach to the Simultaneous Localization and Mapping (SLAM) problem.
      </p>

      <p>
        Prior to working on this project, I had implemented various state estimation algorithms in Matlab for localization, including the <a href="https://www.youtube.com/watch?v=AM1hES5_WQ4" className="text-blue-600 font-semibold hover:underline">Extended Kalman Filter</a>, the <a href="https://www.youtube.com/watch?v=xWZ333vlYUE" className="text-blue-600 font-semibold hover:underline">Unscented Kalman Filter</a>, and the <a href="https://www.youtube.com/watch?v=46N7dpGq4Uw" className="text-blue-600 font-semibold hover:underline">Particle Filter</a>.
      </p>

      <p>
        This project was unique for me in that it was the first smoothing algorithm I worked with to tackle the SLAM problem. Filtering approaches to SLAM generally estimate the current state of a robot given a sequence of past measurements and actions. However, smoothing approaches improve upon the estimates of the entire sequence of the current and past states of the robot, considering the sequence as an overarching model to be smoothened.
      </p>

      <p>
        My main contribution to this project was in the implementation of the <a href="http://webdiis.unizar.es/~jdtardos/papers/Neira_TRA_2001.pdf" className="text-blue-600 font-semibold hover:underline">joint compatibility branch and bound (JCBB) algorithm</a> for data association. At a single point in time, given a set of N robot sensor measurements and M landmarks, the JCBB algorithm examines various combinations of sensor-landmark mappings and uses the Mahalanobis Distance metric to determine which measurements are most likely to be associated with which landmarks.
      </p>

      <p>
        We applied the iSAM algorithm on the <a href="http://www-personal.acfr.usyd.edu.au/nebot/victoria_park.htm" className="text-blue-600 font-semibold hover:underline">Victoria Park dataset</a>. The JCBB algorithm proved to be more effective than standard data association methods when we applied it within the iSAM algorithm on the dataset.
      </p>
    </div>
  );
}
