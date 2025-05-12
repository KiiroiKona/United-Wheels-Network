import { useState } from 'react';
import '../App.css';

const imageList = [
  'corvette.jpg',
  'mercedes.jpg',
  'mustang.jpg',
  // 'ImageName.jpg',
];

const imageFolder = '/images/';

function Admin() {
  const [newCar, setNewCar] = useState({ name: '', details: '', image: '' });
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

  // Get data from localStorage (cars and events)
  const [gallery, setGallery] = useState(() => JSON.parse(localStorage.getItem('gallery')) || []);
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem('events')) || []);

  // Handle adding a new car
  const handleAddCar = () => {
    if (isCarValid()) {
      updateGalleryAndStorage();
      setNewCar({ name: '', details: '', image: '' }); // Reset form
      alert('Car added!');
    } else {
      alert('Please fill all fields!');
    }
  };

  const isCarValid = () => {
    return newCar.name && newCar.details && newCar.image;
  };

  const updateGalleryAndStorage = () => {
    const updatedGallery = [...gallery, newCar];
    setGallery(updatedGallery);
    localStorage.setItem('gallery', JSON.stringify(updatedGallery));
  };

  // Handle selecting the "Car of the Week"
  const handleSelectCarOfTheWeek = (car) => {
    localStorage.setItem('carOfTheWeek', JSON.stringify(car));
    alert(`${car.name} is now Car of the Week!`);
  };

  // Handle deleting a car from the gallery
  const handleDeleteCar = (index) => {
    const updatedGallery = gallery.filter((_, i) => i !== index);
    setGallery(updatedGallery);
    localStorage.setItem('gallery', JSON.stringify(updatedGallery));
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    if (isEventValid(newEvent)) {
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setNewEvent({ title: '', date: '', description: '' }); // Reset event form
      alert('Event added!');
    } else {
      alert('Please fill all event fields!');
    }
  };

  const isEventValid = (event) => {
    return event.title && event.date && event.description;
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>

      <div className="admin-form-panel">
        <h3 className="form-heading">Add New Car</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Car Name"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <textarea maxlength="250"
            placeholder="Details"
            value={newCar.details}
            onChange={(e) => setNewCar({ ...newCar, details: e.target.value })}
            className="input-field"
          />
        </div>

        <div className="image-selection">
          <h4 className="image-selection-title">Select Car Image</h4>
          <div className="image-grid">
            {imageList.map((img, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => setNewCar({ ...newCar, image: imageFolder + img })}
              >
                <img src={imageFolder + img} alt={`Car ${index}`} className="image-thumbnail" />
              </div>
            ))}
          </div>
        </div>
        <button className="button" onClick={handleAddCar}>Add to Gallery</button>
      </div>

      {newCar.image && (
        <div className="image-preview">
          <h4>Selected Image:</h4>
          <img src={newCar.image} alt="Selected Car" className="image-preview-img" />
        </div>
      )}

      <div className="admin-form-panel">
        <h3 className="form-heading">Add New Event</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <textarea maxlength="250"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="input-field"
          />
        </div>
        <button className="button" onClick={handleAddEvent}>Add Event</button>
      </div>

      <div className="car-list">
        <h3 className="car-list-heading">Cars in Gallery</h3>
        <div className="car-grid">
          {gallery.map((car, index) => (
            <div key={index} className="car-item">
              <img src={car.image} alt={car.name} className="car-item-image" />
              <h4 className="car-item-name">{car.name}</h4>
              <p className="car-item-details">{car.details}</p>
              <button className="button" onClick={() => handleDeleteCar(index)}>Delete</button>
              <button className="button" onClick={() => handleSelectCarOfTheWeek(car)}>Set as Car of the Week</button>
            </div>
          ))}
        </div>
      </div>

      <div className="event-list">
        <h3 className="event-list-heading">Upcoming Events</h3>
        <ul className="event-list-ul">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <h4 className="event-item-title">{event.title}</h4>
              <p className="event-item-date">{event.date}</p>
              <p className="event-item-description">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;