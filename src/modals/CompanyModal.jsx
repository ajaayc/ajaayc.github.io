import React from 'react';
import Modal from './Modal';

export default function CompanyModal({ company, onClose }) {
  return (
    <Modal isOpen={!!company} onClose={onClose}>
      <h3 className="text-xl font-bold mb-2">{company.name}</h3>
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
      <p>{company.description}</p>
    </Modal>
  );
}
