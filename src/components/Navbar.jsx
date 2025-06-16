// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1>BHRC</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/race-centre">Race Centre</Link></li>
        <li><Link to="/mint">Mint</Link></li>
        <li><Link to="/stable">Stable</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
