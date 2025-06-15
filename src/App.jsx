import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
console.log('🚀 App loaded with Router');
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
