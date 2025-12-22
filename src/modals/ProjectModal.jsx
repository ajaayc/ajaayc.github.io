import React from 'react';
import Modal from './Modal';

export default function ProjectModal({ project, onClose }) {
  const { title, images, long, date, paperLink, codeLink } = project;

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <h3 className="text-xl font-bold mb-1">{title}</h3>

      {/* Date interval */}
      {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}

      {/* Images */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            className="w-48 max-w-full h-auto object-cover rounded"
          />
        ))}
      </div>

      {/* Description */}
      <p className="mb-4">{long}</p>

      {/* Optional links */}
      <div className="flex gap-4">
        {paperLink && (
          <a
            href={paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            [Paper]
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            [Code]
          </a>
        )}
      </div>
    </Modal>
  );
}
