import React from 'react';

export default function MDOTContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/velodyne.png" alt="Velodyne Lidar" className="w-full rounded" />
      <img src="img/mobileye.JPG" alt="Mobileye unit" className="w-full rounded" />
      <img src="img/ajaayCar.JPG" alt="Instrumented Car" className="w-full rounded" />

      <p>
        As a research assistant at UMTRI, I worked under Dr. Daniel Park on evaluating road lane markings for the Michigan Department of Transportation.
      </p>

      <p>
        We instrumented a Honda Accord with:
      </p>

      <ul className="list-disc list-inside">
        <li>Novatel GPS</li>
        <li>Quanergy M-8 Lidar</li>
        <li>Mobileye unit</li>
        <li>Camera</li>
      </ul>

      <p>
        I developed multi-threaded C++ code using VTK and PCL to extract, interpret, and visualize Lidar data. Additionally, I interfaced with the Mobileye unit via CAN messages and created a single module to run all sensor programs simultaneously.
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/agMfXfZdug4"
        title="MDOT lane marking evaluation"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded"
      ></iframe>
    </div>
  );
}
