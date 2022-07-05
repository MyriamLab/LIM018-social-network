import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNQAwZxRsdKWyWJLKzDRjDouTEjZxyltA',
  authDomain: 'red-social-pets.firebaseapp.com',
  projectId: 'red-social-pets',
  storageBucket: 'red-social-pets.appspot.com',
  messagingSenderId: '259749306706',
  appId: '1:259749306706:web:c858d0cfbfd2cb7f409a8b',
  measurementId: 'G-QL5ZQEZL55'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// creando DB
const db = getFirestore(app);

export const auth = getAuth();
// creamos un const registroUsuario que nos permite almacenar el email y pass y pasar los valores para crearlos en la BD
export const userRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);


export const userRegisterBD = (email,name,lastname,date,sex,password) => {
  addDoc(collection(db,'users'),{
    email:email,
    name:name,
    lastname:lastname,
    date:date,
    sex:sex,
    password:password
  })
}

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);