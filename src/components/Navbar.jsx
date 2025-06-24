import React from 'react';

export default function Navbar() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#0e1a2b', // Updated background to match logo
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Logo has likely replaced this now — delete if using logo image */}
      {/* <h1>...</h1> */}

      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        backgroundColor: '#101820', // Darker shade for nav pill
        border: '1px solid #0077cc',
        borderRadius: '40px',
        padding: '15px 20px',
        marginBottom: '30px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
        maxWidth: '100%',
        width: 'auto',
        boxSizing: 'border-box',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        MsOverflowStyle: 'none',
      }}>
        {['Home', 'Race Centre', 'Mint', 'Stable', 'About'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.25em',
              fontWeight: 'bold',
              padding: '8px 18px',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0077cc';
              e.target.style.color = '#ffffff';
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
          backgroundColor: '#0077cc',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.1em',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#005fa3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#0077cc'}
        >
          Connect Wallet
        </button>
        <span style={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: '#b0b0b0',
          display: 'flex',
          alignItems: 'center',
        }}>Floor Price: TBC</span>
      </div>
    </header>
  );
}