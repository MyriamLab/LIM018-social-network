import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

import {
  getFirestore,
  doc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

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

// creando DB
const db = getFirestore(app);

export const auth = getAuth();
// creamos usuarios en autenthication
export const userRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
//  registrar usuario en la BD
export const userRegisterBD = async (uid, email, name, lastname, date, sex, password) => {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    email,
    name,
    lastname,
    date,
    sex,
    password,
  });
};

//  inicio de sesión de usuario con correo y contraseña
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

//  se inicializa el proveedor de de firebase para que inicie sesión con google
export const proveedorGoogle = new GoogleAuthProvider();
// inicia sesión con cuenta de Google
export const googleInicioSesion = (proveedor) => signInWithPopup(auth, proveedor);

//  proveedor de facebook
export const proveedorFacebook = new FacebookAuthProvider();
//  iniciar sesión con facebook
export const facebookInicioSesion = (proveedor) => signInWithPopup(auth, proveedor);
