import React from 'react';
import Modal from './Modal';

export default function ProjectModal({ project, onClose }) {
  const { title, long: LongContent, date, paperLink, codeLink, siteLink, videoLink, posterLink } = project;

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      className="max-w-[90vw] max-h-[90vh] p-6"
    >
      <div className="overflow-y-auto max-h-[85vh] pr-3">
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Date */}
        {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}

        {/* Optional Links */}
        <div className="flex flex-wrap gap-4 mb-4">
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
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              [Site]
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              [Video]
            </a>
          )}
          {posterLink && (
            <a
              href={posterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              [Poster]
            </a>
          )}
        </div>

        {/* Main Content as a React component */}
        <div className="mb-4 text-gray-800">
          {LongContent}
        </div>
      </div>
    </Modal>
  );
}
