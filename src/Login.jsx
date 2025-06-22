// src/Login.jsx

import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default function Login({ onUserLoggedIn }) {
  // State to hold email/password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setLoginMode] = useState(true); // true = login, false = register
  const [error, setError] = useState(null); // holds error messages (if any)

  // Handles login or register when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      let userCredential;
      if (isLoginMode) {
        // Log in with Firebase Auth
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        // Create a new user
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      // Pass the user back to the parent (App.jsx)
      onUserLoggedIn(userCredential.user);
    } catch (err) {
      setError(err.message); // Show any error that happens (like wrong password)
    }
  };

  // We change background and button color depending on the mode (login vs register)
  const backgroundColor = isLoginMode ? '#e7f0ff' : '#e7ffe7';
  const buttonColor = isLoginMode ? '#007aff' : '#28a745';

  return (
    <div style={{ ...styles.container, backgroundColor }}>
      {/* Optional background illustration — very light and subtle */}
      <div style={styles.illustration}></div>

      {/* The main login/register box */}
      <div style={styles.box}>
        <h2 style={styles.title}>
          {isLoginMode ? 'Log in to your account' : 'Create your account'}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}

          {/* Submit button color changes depending on the mode */}
          <button
            type="submit"
            style={{ ...styles.button, backgroundColor: buttonColor }}
          >
            {isLoginMode ? 'Login' : 'Sign up'}
          </button>
        </form>

        {/* Toggle login/register */}
        <p style={styles.toggle}>
          {isLoginMode ? "Don't have an account?" : 'Already registered?'}{' '}
          <span style={styles.link} onClick={() => setLoginMode(!isLoginMode)}>
            {isLoginMode ? 'Sign up here' : 'Log in here'}
          </span>
        </p>
      </div>
    </div>
  );
}

// Styling everything inline with React's CSS-in-JS style
const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s ease',
    overflow: 'hidden',
  },
  box: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    zIndex: 10, // sits above the illustration
    textAlign: 'center',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  toggle: {
    marginTop: '1rem',
    color: '#555',
    fontSize: '0.95rem',
  },
  link: {
    color: '#007aff',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
  },
  // 👇 Decorative background shape (soft blur blob like Any.do)
  illustration: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle at 30% 30%, #cce7ff, transparent 60%)',
    filter: 'blur(60px)',
    zIndex: 1,
    top: '0',
    left: '0',
    pointerEvents: 'none', // doesn't block clicks
  },
};
