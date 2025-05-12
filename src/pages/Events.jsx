import { useState, useEffect } from 'react';
import '../App.css';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  return (
    <div className="events-container">
      <h2 className="events-title">Upcoming Events</h2>
      {events.length > 0 ? (
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              {event.location && (
                <p className="event-location">{event.location}</p>
              )}
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events-message">No upcoming events at the moment.</p>
      )}
    </div>
  );
}

export default Events;