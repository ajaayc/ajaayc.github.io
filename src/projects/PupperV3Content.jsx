import React from 'react';

export default function PlybotTestbed() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <img src="img/pupperv3_wip.jpg" alt="Plybot prototype" className="w-full max-w-sm rounded" />
      </div>

      <p>
      I am currently building my own <a
          href="https://pupper-v3-documentation.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Pupper V3
        </a> robot, which is used as a teaching tool in the Stanford University <a href="https://cs123-stanford.readthedocs.io/en/latest/"           target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline">CS 123 course</a>.
      </p>
    </div>
  );
}
