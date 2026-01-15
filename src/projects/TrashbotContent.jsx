import React from 'react';

export default function TrashbotContent() {
  return (
    <div className="flex flex-col gap-4">
      {/* Video at the very top */}
      <div className="w-full aspect-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/a6qHyMERqR0?start=29"
          title="Trashbot Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>

      <p>
        For my Autonomous Robotics Laboratory senior design course, I collaborated with a team to build a robot that autonomously navigates and detects and removes trash in its environment. 
        The motivation for this project stemmed from noticing the plethora of trash across the UofM campus during football Saturdays. In theory, we could deploy a fleet of these trash collecting robots after a football game to pick up and dispose of various pieces of trash.
      </p>

      <p>
        We built the robot over a span of 2 months, and it was comprised of various hardware subsystems, including:
      </p>

      <ul className="list-disc pl-5">
        <li>A <a href="https://april.eecs.umich.edu/updates/2015/07/01/magic2.html" className="text-blue-600 font-semibold hover:underline">MagicBot</a> base</li>
        <li>An Arduino and motor controllers</li>
        <li>A robotic arm</li>
        <li>A Microsoft Kinect</li>
        <li>A PS2 Controller</li>
      </ul>

      <p>
        My major contribution to this project was in engineering the TrashBot's robotic arm to pick up various objects. 
        My teammate programmatically analyzed point clouds of data from the Microsoft Kinect attached to the robot, and he provided data to the robotic arm representing the centroids of various objects.
      </p>

      <p>
        Given the [x,y,z] position of an object centroid in the frame of the Kinect coordinate system, I used Python to apply homogeneous matrix transformations to convert the coordinates to the frame of the robotic arm's coordinate system. 
        Following that, I implemented a trigonometry-based inverse kinematics algorithm to determine the joint angles that the arm would need in order to position its end-effector (claw) over that object's centroid point. 
        Finally, I implemented a state machine to facilitate the movement of the arm to pick up and dispose of an object into the TrashBot's onboard trash receptacle without collisions.
      </p>

      <p>
        This experience gave me the opportunity to work with various physical components, and it made me very comfortable with getting my hands dirty. 
        We enjoyed many trips to the local hardware store to piece this robot together. It was very rewarding to see the final product!
      </p>

      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <img src="img/trashbot.jpg" alt="Trashbot" className="w-full max-w-sm rounded" />
        <img src="img/insideTrashbot.jpg" alt="Inside Trashbot" className="w-full max-w-sm rounded" />
      </div>
    </div>
  );
}
