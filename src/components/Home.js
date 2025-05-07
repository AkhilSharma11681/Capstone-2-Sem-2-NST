import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Incredible India</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <div className="welcome-section">
        <h2>Welcome to Your Travel Journey</h2>
        <p>Discover amazing destinations across India</p>
        <div className="featured-destination">
          <h3>Taj Mahal, Agra</h3>
          <p>Experience the wonder of the world's most beautiful monument</p>
          <p className="price">Starting from ₹2,999</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 