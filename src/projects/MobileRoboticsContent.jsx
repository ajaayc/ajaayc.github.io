import React from 'react';

export default function MobileRoboticsContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <img src="img/victoriaPark.png" alt="Victoria Park dataset" className="w-full rounded" />
      <img src="img/JCBB.png" alt="JCBB algorithm" className="w-full rounded" />

      <p>
        Implemented incremental smoothing and mapping (iSAM) for SLAM. My main contribution was the JCBB algorithm for sensor-landmark data association using Mahalanobis distance.
      </p>

      <p>
        Applied iSAM with JCBB on the Victoria Park dataset. This improved data association accuracy compared to standard methods.
      </p>
    </div>
  );
}
