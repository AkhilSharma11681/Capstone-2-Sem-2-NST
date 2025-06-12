import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredDestinations = destinations.filter(dest => 
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // For now, we'll just log the results
    console.log('Search results:', filteredDestinations);
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  const getFilteredDestinations = () => {
    let filtered = [...destinations];
    
    // Apply price filter
    if (priceFilter !== 'all') {
      const maxPrice = parseInt(priceFilter);
      filtered = filtered.filter(dest => {
        const price = parseInt(dest.price.replace('₹', '').replace(',', ''));
        return price <= maxPrice;
      });
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(dest => 
        dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const handleBooking = (destination) => {
    setSelectedDestination(destination);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking to a server
    console.log('Booking submitted:', {
      destination: selectedDestination,
      bookingDetails
    });
    alert('Booking submitted successfully!');
    setShowBookingModal(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the contact form to a server
    console.log('Contact form submitted:', contactForm);
    alert('Message sent successfully!');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  // Simple array of destinations
  const destinations = [
    {
      id: 1,
      title: "Taj Mahal, Agra",
      description: "Visit the beautiful Taj Mahal",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Jaipur Palace",
      description: "See the royal palace",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Kerala Backwaters",
      description: "Enjoy the backwaters",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Goa Beaches",
      description: "Relax on the beaches",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 5,
      title: "Varanasi Ghats",
      description: "Experience the ghats",
      price: "₹3,999",
      image: "http://shikhar.com/blog/wp-content/uploads/2021/05/Places-to-visit-in-Varanasi.png",
      featured: false
    },
    {
      id: 6,
      title: "Darjeeling Hills",
      description: "Visit the hills",
      price: "₹4,499",
      image: "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg",
      featured: false
    }
  ];

  const featuredDestinations = destinations.filter(dest => dest.featured);

  return (
    <div className="home-container">
      {/* Header */}
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
        
        {/* Search bar */}
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

      {/* Featured Destinations */}
      <div className="featured-section">
        <h2>Featured Destinations</h2>
        <div className="featured-grid">
          {featuredDestinations.map(destination => (
            <div key={destination.id} className="featured-card">
              <img src={destination.image} alt={destination.title} />
              <div className="card-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <p className="price">Price: {destination.price}</p>
                <button onClick={() => handleBooking(destination)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About section */}
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
        <h2>All Destinations</h2>
        <div className="filter-container">
          <select value={priceFilter} onChange={handlePriceFilter} className="price-filter">
            <option value="all">All Prices</option>
            <option value="3000">Under ₹3,000</option>
            <option value="4000">Under ₹4,000</option>
            <option value="5000">Under ₹5,000</option>
          </select>
        </div>
        <div className="destinations-grid">
          {getFilteredDestinations().map(destination => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.title} />
              <div className="card-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <p className="price">Price: {destination.price}</p>
                <button onClick={() => handleBooking(destination)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form onSubmit={handleContactSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book {selectedDestination.title}</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleBookingChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleBookingChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleBookingChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Guests:</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={bookingDetails.guests}
                  onChange={handleBookingChange}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-button">Confirm Booking</button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowBookingModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home; 