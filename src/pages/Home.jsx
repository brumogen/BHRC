import bannerImg from '../assets/image.png';

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box', // Ensure padding and border are included in element's total width and height
    }}>

      {/* Main Header / Navigation Area */}
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
          // No explicit width here, let flexbox handle it, but allow wrapping
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
                padding: '8px 15px', // Added padding to make links feel like buttons
                borderRadius: '5px', // Slightly rounded corners for links
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
          flexWrap: 'wrap', // Allow items to wrap
          justifyContent: 'center', // Center items when wrapped
          gap: '20px', // Space between button and price
          width: '100%', // Take full width to help centering
        }}>
          <button style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 25px', // Larger button
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
            fontSize: '1.2em', // Slightly larger floor price
            fontWeight: 'bold',
            color: '#7f8c8d',
            display: 'flex', // Use flex to vertically center with button if they align
            alignItems: 'center',
          }}>Floor Price: TBC</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{
        flexGrow: '1',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%', // Ensure main content area respects its parent's width
      }}>
        {/* Banner Image */}
        <div style={{
          marginBottom: '40px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        }}>
          <img src={bannerImg} alt="Banner" style={{
            width: '100%',
            maxHeight: '450px',
            objectFit: 'cover',
            display: 'block',
            // Adjusted object-position to ensure the top part is visible
            objectPosition: 'top center',
          }} />
        </div>

        {/* Race Info */}
        <section style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          marginBottom: '30px',
        }}>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '1.8em',
            marginBottom: '15px',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
          }}>Next Race:</h2>
          <p style={{ fontSize: '1.1em', marginBottom: '8px' }}><strong>Date:</strong> TBC</p>
          <p style={{ fontSize: '1.1em' }}><strong>Prize Pot:</strong> TBC</p>
        </section>

        {/* Resources Links */}
        <section style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '1.6em',
            marginBottom: '15px',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
          }}>Resources</h3>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" target="_blank" rel="noreferrer" style={{
                textDecoration: 'none',
                color: '#3498db',
                fontSize: '1.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#2980b9'}
              onMouseLeave={(e) => e.target.style.color = '#3498db'}
              >
                Twitter (TBC)
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" style={{
                textDecoration: 'none',
                color: '#3498db',
                fontSize: '1.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#2980b9'}
              onMouseLeave={(e) => e.target.style.color = '#3498db'}
              >
                Whitepaper (TBC)
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto',
        backgroundColor: '#333',
        color: '#fff',
        fontSize: '0.9em',
      }}>
        &copy; {new Date().getFullYear()} Bustling Horse Race Club. All rights reserved.
      </footer>
    </div>
  );
}
