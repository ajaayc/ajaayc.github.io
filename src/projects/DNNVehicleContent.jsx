import React from 'react';

export default function DNNVehicleContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/carBox.jpg" alt="Vehicle detection" className="w-full rounded" />
      <img src="img/graph.png" alt="Training graph" className="w-full rounded" />

      <p>
        For my Self-Driving Cars course, I implemented a fast-RCNN classifier to count cars in GTA simulation images. 
        The model was trained on ~6,000 labeled images using TensorFlow Object Detector API on AWS EC2 GPU instances.
      </p>

      <p>
        Our team achieved 63% mean absolute error, ranking 5th in the class competition.
      </p>
    </div>
  );
}
