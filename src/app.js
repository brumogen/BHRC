import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Stable from './pages/Stable';
import RaceCentre from './pages/RaceCentre';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/stable" element={<Stable />} />
        <Route path="/race-centre" element={<RaceCentre />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
