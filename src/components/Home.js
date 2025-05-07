import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const Header = styled.header`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #1e3c72;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #1e3c72;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #2a5298;
  }
`;

const Hero = styled.div`
  background-image: url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  background: #1e3c72;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #2a5298;
  }
`;

const DestinationsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #1e3c72;
  margin-bottom: 3rem;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DestinationContent = styled.div`
  padding: 1.5rem;
`;

const DestinationTitle = styled.h3`
  color: #1e3c72;
  margin: 0 0 0.5rem 0;
`;

const DestinationDescription = styled.p`
  color: #666;
  margin: 0 0 1rem 0;
`;

const DestinationPrice = styled.p`
  color: #1e3c72;
  font-weight: bold;
  margin: 0;
`;

function Home() {
  const destinations = [
    {
      id: 1,
      title: "Taj Mahal, Agra",
      description: "Experience the wonder of the world's most beautiful monument",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Kerala Backwaters",
      description: "Cruise through the serene backwaters of God's own country",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Jaipur Palace",
      description: "Explore the Pink City's royal heritage and culture",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Goa Beaches",
      description: "Relax on the golden beaches of India's party capital",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Varanasi Ghats",
      description: "Experience the spiritual heart of India",
      price: "₹3,999",
      image: "https://www.shikhar.com/blog/wp-content/uploads/2021/05/Places-to-visit-in-Varanasi.png"
    },
    {
      id: 6,
      title: "India Gate, Delhi",
      description: "Experience the iconic war memorial in the heart of Delhi",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },

  ];

  return (
    <HomeContainer>
      <Header>
        <Logo>Incredible India</Logo>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#destinations">Destinations</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>

      <Hero>
        <HeroContent>
          <HeroTitle>Discover Incredible India</HeroTitle>
          <HeroSubtitle>Experience the rich culture and diverse landscapes of India</HeroSubtitle>
          <SearchBar>
            <SearchInput type="text" placeholder="Where in India do you want to explore?" />
            <SearchButton>Search</SearchButton>
          </SearchBar>
        </HeroContent>
      </Hero>

      <DestinationsSection>
        <SectionTitle>Popular Indian Destinations</SectionTitle>
        <DestinationsGrid>
          {destinations.map(destination => (
            <DestinationCard key={destination.id}>
              <DestinationImage src={destination.image} alt={destination.title} />
              <DestinationContent>
                <DestinationTitle>{destination.title}</DestinationTitle>
                <DestinationDescription>{destination.description}</DestinationDescription>
                <DestinationPrice>Starting from {destination.price}</DestinationPrice>
              </DestinationContent>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </DestinationsSection>
    </HomeContainer>
  );
}

export default Home; 