import bannerImg from '../assets/image.png'; // You’ll add this image in Step 2

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // A slightly more modern sans-serif font
      color: '#333', // Darker text for better contrast
      backgroundColor: '#f8f8f8', // Light grey background for the whole page
      minHeight: '100vh', // Ensure the background covers the whole viewport
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top bar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px', // More padding for breathing room
        backgroundColor: '#fff', // White background for the header
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
        flexWrap: 'wrap', // Allow items to wrap on smaller screens
      }}>
        {/* Title and Navigation */}
        <h1 style={{
          fontSize: '2em', // Adjusted font size to prevent cropping, responsive
          margin: '0', // Remove default margin
          color: '#2c3e50', // Dark blue for the title
          whiteSpace: 'nowrap', // Keep title on one line if possible
        }}>Bustling Horse Race Club</h1>

        <nav style={{
          display: 'flex',
          gap: '25px', // Space between navigation items
          marginLeft: 'auto', // Push nav to the right on larger screens
          flexWrap: 'wrap', // Allow nav items to wrap
          justifyContent: 'center', // Center items when wrapped
          marginTop: '10px', // Add some space when wrapped
          '@media (min-width: 768px)': {
            marginTop: '0', // No top margin on larger screens
          }
        }}>
          {/* Moved navigation links here and styled them */}
          {['Home', 'Race Centre', 'Mint', 'Stable', 'About'].map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              style={{
                textDecoration: 'none',
                color: '#555', // Greyish color for links
                fontSize: '1.1em',
                fontWeight: 'bold',
                padding: '5px 0',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'} // Blue on hover
              onMouseLeave={(e) => e.target.style.color = '#555'}
            >
              {item}
              {/* Optional: Underline on hover */}
              <span style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
                width: '0',
                height: '2px',
                backgroundColor: '#3498db',
                transition: 'width 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.width = '100%'}
              onMouseLeave={(e) => e.target.style.width = '0%'}
              ></span>
            </a>
          ))}
        </nav>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px', // Space between button and price
          marginLeft: '40px', // Push to the right
          flexWrap: 'wrap', // Allow items to wrap
          justifyContent: 'center', // Center items when wrapped
          marginTop: '10px', // Add some space when wrapped
          '@media (min-width: 768px)': {
            marginTop: '0', // No top margin on larger screens
          }
        }}>
          <button style={{
            backgroundColor: '#3498db', // Blue button
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'} // Darker blue on hover
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Connect Wallet
          </button>
          <span style={{
            fontSize: '1.1em',
            fontWeight: 'bold',
            color: '#7f8c8d', // Grey for floor price
          }}>Floor Price: TBC</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{
        flexGrow: '1', // Allow main content to take up remaining space
        maxWidth: '1200px', // Max width for content for better readability
        margin: '0 auto', // Center the content
        padding: '20px',
      }}>
        {/* Banner Image */}
        <div style={{
          marginBottom: '40px', // Space below the banner
          borderRadius: '8px', // Slightly rounded corners for the image
          overflow: 'hidden', // Ensures corners are applied
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)', // More pronounced shadow
        }}>
          <img src={bannerImg} alt="Banner" style={{
            width: '100%',
            maxHeight: '450px', // Slightly increased max height
            objectFit: 'cover',
            display: 'block', // Removes extra space below image
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
            borderBottom: '2px solid #eee', // Subtle separator
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
          <ul style={{ listStyleType: 'none', padding: '0' }}> {/* Remove bullet points */}
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

      {/* Navigation (footer - removed as nav moved to header) */}
      {/* You can re-add a simple copyright footer if needed */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto', // Pushes footer to the bottom
        backgroundColor: '#333', // Dark background for footer
        color: '#fff', // White text
        fontSize: '0.9em',
      }}>
        &copy; {new Date().getFullYear()} Bustling Horse Race Club. All rights reserved.
      </footer>
    </div>
  );
}

