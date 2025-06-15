import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function AppWithErrorBoundary() {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    window.onerror = function (msg, src, line, col, err) {
      setError(err?.message || msg);
      return true;
    };
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', color: 'red' }}>
        <strong>Error loading app:</strong>
        <pre>{error}</pre>
      </div>
    );
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithErrorBoundary />
  </React.StrictMode>
);
