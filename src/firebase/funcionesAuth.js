/* eslint-disable max-len */
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from './config.js';

// eslint-disable-next-line max-len
export const userRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);

//  inicio de sesión de usuario con correo y contraseña
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// inicia sesión con cuenta de Google
export const googleInicioSesion = (proveedor) => signInWithPopup(auth, proveedor);

// verificación por correo
export const sendEmailVerificationUser = () => sendEmailVerification(auth.currentUser);
