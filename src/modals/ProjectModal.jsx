import React from 'react';
import Modal from './Modal';

export default function ProjectModal({ project, onClose }) {
  const { title, media, long, date, paperLink, codeLink } = project;

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      className="max-w-[90vw] max-h-[90vh] p-6"
    >
      {/* Scrollable content */}
      <div className="overflow-y-auto max-h-[85vh] pr-3">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}

        {/* Media */}
        <div className="flex flex-col gap-4 mb-4">
          {media.map((item, idx) =>
            item.type === 'image' ? (
              <img
                key={idx}
                src={item.src}
                alt={item.alt || `${title} ${idx + 1}`}
                className="w-full h-auto object-cover rounded"
              />
            ) : item.type === 'video' ? (
              <div key={idx} className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded"
                  src={item.src}
                  title={item.alt || `${title} video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null
          )}
        </div>

        {/* Full project description with preserved formatting */}
        <div className="mb-4 text-gray-800 whitespace-pre-line">
          {long}
        </div>

        {/* Optional links */}
        <div className="flex flex-wrap gap-4">
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
      </div>
    </Modal>
  );
}
