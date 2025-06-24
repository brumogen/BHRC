import React from 'react';

// You'll need an SVG or PNG of a horse here.
// For now, I'm providing a simple SVG in the code, or you can import from assets:
// import horseIcon from '../assets/horse-icon.svg'; // If you have a file like this

export default function Navbar() {

  // Simple inline SVG for a horse icon (you can replace this with an imported asset if preferred)
  const HorseIconSVG = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#B8860B" style={{
      position: 'absolute',
      top: '-10px', // Adjust to lift it slightly above the border
      right: '-10px', // Adjust to move it outside the border
      zIndex: 10,
      filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))', // Subtle shadow for depth
    }}>
      <path d="M19 10c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-4c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm-10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-4c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm14 16h-21l-2 2h25l-2-2zm-3-10l-10 10h14l-4-10zm-10-8h-6c-1.104 0-2 .896-2 2v6h10c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1zm-1 7c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z"/>
    </svg>
  );


  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px', // Increased overall header padding
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // More pronounced shadow for the whole header
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: '2.5em',
        margin: '0 0 25px 0', // More margin to separate from new nav box
        color: '#2c3e50',
        textAlign: 'center',
        lineHeight: '1.2',
        padding: '0 10px',
        boxSizing: 'border-box',
        whiteSpace: 'normal',
      }}>
        Bustling Horse Race Club
      </h1>

      {/* Sexy Looking Box - The Racing Track */}
      <nav style={{
        position: 'relative', // Needed for absolute positioning of the horse icon
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px', // Spacing between links inside the track
        backgroundColor: '#D4E2C7', // Soft green for the track background
        border: '2px solid #8B4513', // Brown border for the track edge
        borderRadius: '50px', // Heavily rounded corners for the oval shape
        padding: '15px 30px', // Padding inside the track box
        marginBottom: '30px', // Space below the nav track
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.15)', // Inner and outer shadow
        // Optional: Inner dashed border for track lanes
        backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 10%, #A9A9A9 10%, #A9A9A9 11%, transparent 11%)',
        backgroundSize: '20px 2px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center', // Center the dashed line
        lineHeight: '1.5', // For the pseudo-lane effect
      }}>
        {/* Horse Symbol */}
        <HorseIconSVG /> {/* Render the horse icon here */}

        {/* Navigation Links */}
        {['Home', 'Race Centre', 'Mint', 'Stable', 'About'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: '#4B3F38', // Dark brown text for contrast
              fontSize: '1.15em', // Slightly larger font
              fontWeight: 'bold',
              padding: '8px 18px', // More padding
              borderRadius: '25px', // More rounded for individual links
              transition: 'background-color 0.3s ease, color 0.3s ease',
              whiteSpace: 'nowrap', // Prevent links from breaking lines
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#8B4513'; // Brown background on hover
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'; // Transparent when not hovered
              e.target.style.color = '#4B3F38';
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
        marginTop: '10px', // Add some space above
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
