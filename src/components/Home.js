import React, { useState } from 'react';
import './Home.css';
import Gallery from './Gallery';

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
    // For now, we'll just log the search query
    console.log('Searching for:', searchQuery);
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
      <header className="header">
        <h1>Incredible India</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero-section">
        <h2>Discover India's Hidden Treasures</h2>
        <p>Explore the rich culture and heritage of India</p>
        
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="featured-section">
        <h2>Featured Destinations</h2>
        <div className="destinations-grid">
          {featuredDestinations.map(destination => (
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

      <div className="about-section" id="about">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Get the best deals on your travel packages</p>
          </div>
          <div className="feature-card">
            <h3>Expert Guides</h3>
            <p>Travel with experienced local guides</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>We're always here to help you</p>
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

      {/* Gallery section */}
      <Gallery />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Travelers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Amazing experience! The booking process was smooth and the trip was unforgettable."
            </div>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Great service and wonderful destinations. Will definitely book again!"
            </div>
            <div className="testimonial-author">- Mike Thompson</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Best travel website I've used. Everything was perfect from start to finish."
            </div>
            <div className="testimonial-author">- Emily Davis</div>
          </div>
        </div>
      </section>

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