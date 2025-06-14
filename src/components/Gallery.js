import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
      title: 'Golden Temple',
      description: 'The holiest shrine in Sikhism'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9',
      title: 'Hawa Mahal',
      description: 'Palace of Winds in Jaipur'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1548013146-72479768bada',
      title: 'Mysore Palace',
      description: 'Royal residence in Karnataka'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      title: 'Khajuraho Temples',
      description: 'Ancient temple complex'
    }
  ];

  return (
    <div className="gallery">
      <h2>Explore More Destinations</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 