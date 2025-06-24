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
      boxSizing: 'border-box',
    }}>

      {/* REMOVE THE ENTIRE <header> BLOCK FROM HERE */}
      {/* ... up to here ... */}


      {/* Main Content Area - KEEP THIS AND BELOW */}
      <main style={{
        flexGrow: '1',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%',
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
