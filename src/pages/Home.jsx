export default function Home() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#ffffff',
      backgroundColor: '#0e1a2b', // Full page navy background
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    }}>
      <main style={{
        flexGrow: '1',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%',
      }}>
        {/* Next Race Box */}
        <section style={{
          padding: '30px',
          backgroundColor: '#1c2a3a', // Card navy
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
          marginBottom: '30px',
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '1.8em',
            marginBottom: '15px',
            borderBottom: '2px solid #333',
            paddingBottom: '10px',
          }}>Next Race:</h2>
          <p style={{ fontSize: '1.1em', marginBottom: '8px' }}><strong>Date:</strong> TBC</p>
          <p style={{ fontSize: '1.1em' }}><strong>Prize Pot:</strong> TBC</p>
        </section>

        {/* Resources Box */}
        <section style={{
          padding: '30px',
          backgroundColor: '#1c2a3a',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
        }}>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.6em',
            marginBottom: '15px',
            borderBottom: '2px solid #333',
            paddingBottom: '10px',
          }}>Resources</h3>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" target="_blank" rel="noreferrer" style={{
                textDecoration: 'none',
                color: '#0077cc',
                fontSize: '1.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#3399ff'}
              onMouseLeave={(e) => e.target.style.color = '#0077cc'}
              >
                Twitter (TBC)
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" style={{
                textDecoration: 'none',
                color: '#0077cc',
                fontSize: '1.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#3399ff'}
              onMouseLeave={(e) => e.target.style.color = '#0077cc'}
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
        backgroundColor: '#101820',
        color: '#ffffff',
        fontSize: '0.9em',
      }}>
        &copy; {new Date().getFullYear()} Bustling Horse Race Club. All rights reserved.
      </footer>
    </div>
  );
}