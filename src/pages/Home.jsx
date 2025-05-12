import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const [carOfTheWeek, setCarOfTheWeek] = useState(null);

  useEffect(() => {
    const storedCar = JSON.parse(localStorage.getItem('carOfTheWeek'));
    setCarOfTheWeek(storedCar);
  }, []);

  return (
    <div className="home-scroll-container">

      <div className="home-section video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>Welcome to the Car Meet Gallery</h1>
          <p>Discover wondeful cars, their details, and more!</p>
        </div>
      </div>

      <div className="home-section dark-section">
        <h2>Car of the Week</h2>
        {carOfTheWeek ? (
          <div className="car-week-details">
            <img
              src={carOfTheWeek.image}
              alt={carOfTheWeek.name}
              className="car-week-image"
            />
            <div className="car-week-text">
              <h3>{carOfTheWeek.name}</h3>
              <p>{carOfTheWeek.details}</p>
            </div>
          </div>
        ) : (
          <p>No car of the week set...</p>
        )}
      </div>

      <div className="home-section explore-section">
        <h2>Explore More</h2>
        <p>Check out the latest additions to our gallery or upcoming events!</p>
        <div className="explore-buttons">
          <Link to="/gallery" className="btn">View Gallery</Link>
          <Link to="/events" className="btn">View Events</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;