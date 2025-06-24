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
        fontFamily: "'Playfair Display', serif", // Retaining the elegant font
        fontSize: '2.8em',
        margin: '0 0 30px 0',
        color: '#2c3e50',
        textAlign: 'center',
        lineHeight: '1.2',
        padding: '0 10px',
        boxSizing: 'border-box',
        whiteSpace: 'normal',
      }}>
        Bustling Horse Race Club
      </h1>

      {/* Sexy Looking Box - The Sleek Navigation Bar (Now Scrollable) */}
      <nav style={{
        display: 'flex',
        // Removed `flexWrap: 'wrap'` to force single line
        // Removed `justifyContent: 'center'` to allow links to naturally flow from left and enable scroll
        alignItems: 'center',
        gap: '25px',
        backgroundColor: '#34495e',
        border: '1px solid #7f8c8d',
        borderRadius: '40px',
        padding: '15px 20px', // Adjusted horizontal padding to allow more scroll room
        marginBottom: '30px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
        maxWidth: '100%', // Allow it to take full width
        width: 'auto', // Allow content to dictate width before overflow
        boxSizing: 'border-box',

        // --- NEW STYLES FOR SCROLLABILITY ---
        overflowX: 'auto', // Enable horizontal scrolling when content overflows
        whiteSpace: 'nowrap', // Crucial: Prevents items from wrapping to the next line
        WebkitOverflowScrolling: 'touch', // Improves scrolling performance on iOS devices
        // Hide scrollbar for cleaner look (optional, but common)
        scrollbarWidth: 'none', /* Firefox */
        MsOverflowStyle: 'none',  /* IE and Edge */
        '&::-webkit-scrollbar': { /* Chrome, Safari, Opera */
            display: 'none'
        },
      }}>
        {/* Navigation Links */}
        {['Home', 'Race Centre', 'Mint', 'Stable', 'About', 'Contact', 'FAQ'].map((item) => ( // Added a couple more dummy links to demonstrate scroll
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '1.15em',
              fontWeight: 'bold',
              padding: '8px 18px',
              borderRadius: '20px',
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
              flexShrink: 0, // Prevents links from shrinking on smaller screens
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2c3e50';
              e.target.style.color = '#e0e0e0';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
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
