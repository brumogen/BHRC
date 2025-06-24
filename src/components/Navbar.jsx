// bhrc/src/components/Navbar.jsx
import React from 'react';
// No bannerImg needed here unless your Navbar itself has an image, which it currently doesn't based on this header block

export default function Navbar() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column', // Changed to column to stack elements on top of each other
      alignItems: 'center', // Center items horizontally
      padding: '15px 20px', // Adjusted padding
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%', // Ensure it takes full width
      boxSizing: 'border-box',
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: '2.5em', // Increased font size for prominence
        margin: '0 0 15px 0', // Bottom margin to separate from nav
        color: '#2c3e50',
        textAlign: 'center', // Center the text within its container
        lineHeight: '1.2', // Improve line spacing if it wraps
        padding: '0 10px', // Small horizontal padding to prevent text from touching edges
        boxSizing: 'border-box',
        whiteSpace: 'normal', // Allow text to wrap naturally
      }}>
        Bustling Horse Race Club
      </h1>

      {/* Navigation Links */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center', // Center the links
        flexWrap: 'wrap', // Allow links to wrap to the next line on smaller screens
        gap: '20px', // Space between navigation items
        marginBottom: '20px', // Space below nav
      }}>
        {['Home', 'Race Centre', 'Mint', 'Stable', 'About'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: '#555',
              fontSize: '1.1em',
              fontWeight: 'bold',
              padding: '8px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#555';
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

