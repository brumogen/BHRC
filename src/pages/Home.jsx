import bannerImg from '../assets/banner.png'; // You’ll add this image in Step 2

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Top bar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <h1>Bustling Horse Race Club</h1>
        <div>
          <button style={{ marginRight: '15px' }}>Connect Wallet</button>
          <span>Floor Price: TBC</span>
        </div>
      </header>

      {/* Banner Image */}
      <div>
        <img src={bannerImg} alt="Banner" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      </div>

      {/* Race Info */}
      <section style={{ padding: '40px 20px' }}>
        <h2>Next Race:</h2>
        <p><strong>Date:</strong> TBC</p>
        <p><strong>Prize Pot:</strong> TBC</p>
      </section>

      {/* Links */}
      <section style={{ padding: '20px' }}>
        <h3>Resources</h3>
        <ul>
          <li><a href="#" target="_blank" rel="noreferrer">Twitter (TBC)</a></li>
          <li><a href="#" target="_blank" rel="noreferrer">Whitepaper (TBC)</a></li>
        </ul>
      </section>

      {/* Navigation (footer) */}
      <footer style={{ backgroundColor: '#eee', padding: '20px', marginTop: '40px' }}>
        <nav>
          <a href="/" style={{ marginRight: '15px' }}>Home</a>
          <a href="/race-centre" style={{ marginRight: '15px' }}>Race Centre</a>
          <a href="/mint" style={{ marginRight: '15px' }}>Mint</a>
          <a href="/stable" style={{ marginRight: '15px' }}>Stable</a>
          <a href="/about">About</a>
        </nav>
      </footer>
    </div>
  );
}
