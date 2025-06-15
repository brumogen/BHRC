import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>This is Home (inline)</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
