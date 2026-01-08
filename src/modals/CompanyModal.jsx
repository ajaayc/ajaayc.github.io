import React from 'react';
import Modal from './Modal';

export default function CompanyModal({ company, onClose }) {
  if (!company) return null;

  return (
    <Modal isOpen={!!company} onClose={onClose}>
      {/* Header: logo + name */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-20 h-20 object-contain rounded bg-white/80 p-1"
        />
        <div>
          <h3 className="text-2xl font-bold">{company.name}</h3>
          {company.role && <p className="text-gray-600">{company.role}</p>}
        </div>
      </div>

      {/* Images */}
      {company.images && company.images.length > 0 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {company.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${company.name} ${idx + 1}`}
              className="w-48 max-w-full h-auto object-cover rounded"
            />
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-700 mb-4">{company.description}</p>

      {/* Action Buttons */}
      {company.links && company.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {company.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </Modal>
  );
}
