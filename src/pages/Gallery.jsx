import React, { useState } from 'react';
import '../App.css';

function Gallery() {
  const gallery = JSON.parse(localStorage.getItem('gallery')) || [];
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Car Gallery</h2>
      <div className="gallery-grid">
        {gallery.length === 0 ? (
          <p>No cars available in the gallery.</p>
        ) : (
          gallery.map((car, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => handleCardClick(car)}
            >
              <img
                src={car.image}
                alt={`Car ${index}`}
                className="gallery-card-image"
              />
              <h4 className="gallery-card-name">{car.name}</h4>
            </div>
          ))
        )}
      </div>

      {selectedCar && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{selectedCar.name}</h3>
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="modal-image"
            />
            <p className="modal-details">{selectedCar.details}</p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;