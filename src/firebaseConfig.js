// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDznQdRnfncBKsPMOO-XlBJu7ouAFK-BDg',
  authDomain: 'my-todo-app2-10ca3.firebaseapp.com',
  projectId: 'my-todo-app2-10ca3',
  storageBucket: 'my-todo-app2-10ca3.firebasestorage.app',
  messagingSenderId: '548117118688',
  appId: '1:548117118688:web:ac7ed24876eb17fbb5da85',
  measurementId: 'G-PPM5297NHB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
