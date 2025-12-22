import React from 'react';
import Modal from './Modal';

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <div className="flex gap-2 mb-4 flex-wrap">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx + 1}`}
            className="w-48 max-w-full h-auto object-cover rounded"
          />
        ))}
      </div>
      <p>{project.long}</p>
    </Modal>
  );
}
