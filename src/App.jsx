// src/App.jsx

import React, { useState } from 'react';
// We import the login screen and dashboard
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  // This piece of state stores who is logged in (null means no one yet)
  const [user, setUser] = useState(null);

  // If user is NOT logged in, show the login/signup screen
  if (!user) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>📝 Welcome to ToDo App</h1>
          {/* When the user logs in, we set them in state */}
          <Login onUserLoggedIn={(u) => setUser(u)} />
        </div>
      </div>
    );
  }

  // If user IS logged in, show the dashboard
  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}

export default App;

// These are the styles — just for making the login page look good
const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to bottom right, #f7f9fb, #e3f2fd)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    color: '#007aff',
  },
};