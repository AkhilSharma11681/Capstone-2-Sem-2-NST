import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Simple console log for now
    console.log('Searching for:', searchQuery);
  };

  // Simple array of destinations
  const destinations = [
    {
      id: 1,
      title: "Taj Mahal, Agra",
      description: "Visit the beautiful Taj Mahal",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Jaipur Palace",
      description: "See the royal palace",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Kerala Backwaters",
      description: "Enjoy the backwaters",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Goa Beaches",
      description: "Relax on the beaches",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Varanasi Ghats",
      description: "Experience the ghats",
      price: "₹3,999",
      image: "http://shikhar.com/blog/wp-content/uploads/2021/05/Places-to-visit-in-Varanasi.png"
    },
    {
      id: 6,
      title: "Darjeeling Hills",
      description: "Visit the hills",
      price: "₹4,499",
      image: "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg"
    }
  ];

  return (
    <div className="home-container">
      {/* Simple header */}
      <div className="header">
        <h1>Travel India</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <h1>Welcome to India Travel Guide</h1>
        <p>Discover amazing places to visit in India</p>
        
        {/* Simple search bar */}
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Simple About section */}
      <div className="about-section" id="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Travel Guide</h3>
            <p>We help you find the best places to visit in India. From famous monuments to beautiful beaches, we have it all!</p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h4>Easy Booking</h4>
              <p>Book your trips easily</p>
            </div>
            <div className="feature">
              <h4>Best Prices</h4>
              <p>Get the best deals</p>
            </div>
            <div className="feature">
              <h4>Safe Travel</h4>
              <p>Travel with confidence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations section */}
      <div className="destinations-section" id="destinations">
        <h2>Popular Places</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.title} />
              <div className="card-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <p>Price: {destination.price}</p>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 