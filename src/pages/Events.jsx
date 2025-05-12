import { useState, useEffect } from 'react';
import '../App.css';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.date} - {event.location}</p>
          </div>
        ))
      ) : (
        <p>No upcoming events at the moment.</p>
      )}
    </div>
  );
}

export default Events;