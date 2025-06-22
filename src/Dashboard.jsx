// src/Dashboard.jsx

import React from 'react';

export default function Dashboard({ user, onLogout }) {
  // We'll later list real todos here, for now we just show a welcome box

  return (
    <div style={styles.container}>
      {/* Top navigation bar */}
      <header style={styles.header}>
        <h2 style={styles.brand}>Gui's TODO App</h2>
        <div>
          <span style={styles.userEmail}>{user.email}</span>
          <button style={styles.logoutButton} onClick={onLogout}>
            Log out
          </button>
        </div>
      </header>

      {/* Main content */}
      <main style={styles.main}>
        <h1 style={styles.title}>Your Tasks</h1>
        <p style={styles.subtitle}>Let’s get some things done today 💪</p>

        {/* This is where we'll list todo items later */}
        <div style={styles.todoListPlaceholder}>
          <p style={styles.emptyState}>No tasks yet. Let’s add one soon!</p>
        </div>
      </main>
    </div>
  );
}

// Simple styling object — clean, soft, rounded like Any.do
const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f7f9fb',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007aff',
  },
  userEmail: {
    marginRight: '1rem',
    fontSize: '0.9rem',
    color: '#444',
  },
  logoutButton: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  main: {
    padding: '2rem',
    flexGrow: 1,
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  todoListPlaceholder: {
    border: '2px dashed #d0d7de',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  emptyState: {
    color: '#999',
    fontSize: '1rem',
  },
};
