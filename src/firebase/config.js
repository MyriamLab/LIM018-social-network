// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

import {
  getStorage,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js';

//  configuración de firebase con nuestro proyecto
const firebaseConfig = {
  apiKey: 'AIzaSyBNQAwZxRsdKWyWJLKzDRjDouTEjZxyltA',
  authDomain: 'red-social-pets.firebaseapp.com',
  projectId: 'red-social-pets',
  storageBucket: 'red-social-pets.appspot.com',
  messagingSenderId: '259749306706',
  appId: '1:259749306706:web:c858d0cfbfd2cb7f409a8b',
  measurementId: 'G-QL5ZQEZL55',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Inicializar authentication
export const auth = getAuth();

//  inicio de sesión de usuario con correo y contraseña
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

//  se inicializa el proveedor de de firebase para que inicie sesión con google
export const proveedorGoogle = new GoogleAuthProvider();

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getStorage,
};
