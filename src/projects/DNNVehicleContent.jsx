// projects/VehicleDetectionContent.jsx
import React from 'react';

export default function VehicleDetectionContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img src="img/carBox.jpg" alt="Vehicle detection bounding boxes" className="w-full max-w-sm rounded" />
        <img src="img/graph.png" alt="Training graph" className="w-full max-w-sm rounded" />
      </div>

      <p>
        For my Self-Driving Cars course, I worked in a team to implement a classifier to count the number of cars in an arbitrary image generated from Grand Theft Auto (GTA) simulation. We utilized the TensorFlow Python Object Detector API on AWS EC2 GPU instances to train a fast-RCNN with 50 layers. We trained the RCNN on ~ 6,000 training images with known bounding box locations of cars and we specified two classifications for a detected object: {"{Car, Not Car}"}.
      </p>

      <p>
        Using our model, my team ranked 5th place among 35 teams in the class competition by achieving a 63% mean absolute error on the instructor's test set of GTA images with unknown car counts.
      </p>
    </div>
  );
}
