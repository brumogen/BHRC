// bhrc/src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Title */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif", // A more elegant, serif font for the title
        fontSize: '2.8em', // Slightly larger font for prominence
        margin: '0 0 30px 0', // Increased bottom margin for better separation
        color: '#2c3e50',
        textAlign: 'center',
        lineHeight: '1.2',
        padding: '0 10px',
        boxSizing: 'border-box',
        whiteSpace: 'normal',
      }}>
        Bustling Horse Race Club
      </h1>

      {/* Sexy Looking Box - The Sleek Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center', // Center items initially
        alignItems: 'center', // Align items vertically
        flexWrap: 'wrap', // Allow wrapping for responsiveness
        gap: '25px', // More space between links
        backgroundColor: '#34495e', // Deep charcoal grey for a sophisticated look
        border: '1px solid #7f8c8d', // Subtle light grey border
        borderRadius: '40px', // Highly rounded corners for a sleek pill shape
        padding: '15px 40px', // More horizontal padding
        marginBottom: '30px', // Space below the nav bar
        boxShadow: '0 6px 15px rgba(0,0,0,0.2)', // More pronounced shadow for elevation
        maxWidth: '700px', // Constrain max width for better aesthetic on large screens
        width: 'calc(100% - 40px)', // Allow it to shrink, maintaining padding
        boxSizing: 'border-box',
      }}>
        {/* Removed Horse Symbol */}

        {/* Navigation Links */}
        {['Home', 'Race Centre', 'Mint', 'Stable', 'About'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: 'white', // White text for strong contrast
              fontSize: '1.15em',
              fontWeight: 'bold',
              padding: '8px 18px',
              borderRadius: '20px', // Slightly less rounded for individual links
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease', // Added transform for subtle pop
              whiteSpace: 'nowrap', // Prevent text from wrapping
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2c3e50'; // Darker grey on hover
              e.target.style.color = '#e0e0e0'; // Slightly off-white on hover
              e.target.style.transform = 'scale(1.05)'; // Subtle pop effect
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'; // Transparent when not hovered
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Connect Wallet & Floor Price */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        marginTop: '10px',
      }}>
        <button style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.1em',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Connect Wallet
        </button>
        <span style={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: '#7f8c8d',
          display: 'flex',
          alignItems: 'center',
        }}>Floor Price: TBC</span>
      </div>
    </header>
  );
}
