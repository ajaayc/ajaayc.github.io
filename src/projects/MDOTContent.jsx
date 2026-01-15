// projects/MDOTLaneMarkingContent.jsx
import React from 'react';

export default function MDOTLaneMarkingContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/velodyne.png" alt="Velodyne lidar" className="w-full max-w-sm rounded" />
        <img src="img/mobileye.JPG" alt="Mobileye unit" className="w-full max-w-sm rounded" />
      </div>

      <p>
        As a research assistant at the University of Michigan Transportation Research Institute in Ann Arbor, MI, I worked under Dr. <a href="https://sites.google.com/view/danielpark/home" className="text-blue-600 font-semibold hover:underline">Daniel Park</a> on a project to evaluate the effectiveness of various road lanemarking materials. The project was funded by the Michigan Department of Transportation (MDOT).
      </p>

      <p>
        In 2017, a section of the US-23 highway between Ann Arbor, MI and Brighton, MI was paved with different lanemarking materials along different stretches. We planned to perform a study over a 2-year period to determine how well each lanemarking material on the highway lasted over time; we expected that the different stretches of the highway would be impacted similarly by various environmental factors, such as temperature and precipitation.
      </p>

      <p>
        To achieve our goal we required a method to take measurements of the lanemarkings' conditions on the US-23 highway once during each month so that after the 2-year period we could retrospectively analyze how the lanemarkings' conditions changed over time. Our solution to this problem was to equip a Honda Accord car with various sensors, including:
      </p>

      <ul className="list-disc pl-5">
        <li>Novatel GPS</li>
        <li><a href="https://quanergy.com/m8/" className="text-blue-600 font-semibold hover:underline">Quanergy M-8 Lidar</a></li>
        <li><a href="https://www.mobileye.com/en-us/" className="text-blue-600 font-semibold hover:underline">Mobileye unit</a></li>
        <li>Camera</li>
      </ul>

      <p>
        We proceeded to then engineer a software system that would be executed on the car to collect data of the road conditions from each of these sensors while a human operator drove the car along the US-23 highway once each month.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/ajaayCar.JPG" alt="Sensor-equipped vehicle" className="w-full max-w-sm rounded" />
      </div>

      <p>
        For this project, I developed multi-threaded C++ code utilizing the VTK and PCL libraries to extract, interpret, and visualize data collected from our Lidar. We experimented with two Lidar's: The Quanergy M-8 and the Velodyne HDL-64E. Each of these Lidars outputs [x,y,z] point clouds of their surroundings as well as point <a href="http://desktop.arcgis.com/en/arcmap/10.3/manage-data/las-dataset/what-is-intensity-data-.htm" className="text-blue-600 font-semibold hover:underline">intensities</a>. We were mostly interested in examining the point intensity measurements of the landmarkings. In theory, we could see how the intensity values of the points representing lanemarkings changed over time. The degradation of the highway pavement by the Michigan weather would result in lower intensity points returned by the Lidar for various lanemarking materials.
      </p>

      <p>
        I also developed C++ code to interface with our car's Mobileye unit via the vehicle's CAN message network. The Mobileye communicated data regarding the status of the left and right lanemarkings on the road in front of the driver. Its data arrived in real time as a sequence of bytes that needed to be converted into a human readable format.
      </p>

      <p>
        Finally, I facilated the collection of data from all four of our sensors simultaneously by helping to create a single module that would run all four sensor collection programs together as individual threads of a single CPU process. The module ran on a single HP i7 laptop during each of the car's monthly drives.
      </p>

      <p>
        I was very proud of our final software system. This project necessitated a wonderful combination of both robotics and computer science knowledge.
      </p>

      <div className="w-full aspect-video mt-4">
        <iframe
          src="https://www.youtube.com/embed/agMfXfZdug4"
          title="MDOT Lane Marking Evaluation"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>
    </div>
  );
}
