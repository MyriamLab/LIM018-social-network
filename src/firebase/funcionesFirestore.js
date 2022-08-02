/* eslint-disable max-len */
import {
  db,
  getDoc,
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
} from './config.js';
import { dateTime } from '../view/datePost.js';

/** ************************ IMPLEMENTAR MÉTODOS DE USUARIO ********************** */
export const userRegisterBD = async (uid, email, name, imgUsuario, imgPortada) => {
  await setDoc(doc(db, 'users', uid), {
    email,
    name,
    imgUsuario,
    imgPortada,
  });
};

//  jalar datos desde firestore del usuario por id
export const getUserBD = (uid) => {
  const dataUser = getDoc(doc(db, 'users', uid)).then((userData) => userData.data());
  return dataUser;
};

//  jalar datos desde firestore del usuario por id y colección=''
export const obtenerCollById = (id, coleccion) => {
  const docSnap = getDoc(doc(db, coleccion, id)).then((userDoc) => userDoc.data());
  return docSnap;
};

//  jalar datos desde firestore de los post
export const getUserColl = (documento) => {
  const dataPost = onSnapshot(collection(db, 'users'), documento);
  return dataPost;
};

/** ************************ IMPLEMENTAR MÉTODOS DE POST ********************** */
export const createPost = async (idUser, contentPost, urlImg, userName, userImg, status) => {
  await addDoc(collection(db, 'post'), {
    idUser,
    contentPost,
    urlImg,
    userName,
    userImg,
    status,
    time: dateTime(),
    likes: [],
    timestamp: serverTimestamp(),
  });
};

//  jalar datos desde firestore de los post
export const getPostBD = (documento) => {
  const dataPost = onSnapshot(query(collection(db, 'post'), orderBy('timestamp', 'desc')), (documento));
  return dataPost;
};

//  eliminar  post por id
export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

//  jalar  post por id
export const getPostEdit = (id) => getDoc(doc(db, 'post', id));

//  actualizar  post por id y el enviamos la nueva data
export const updatePost = (id, newFileds) => updateDoc(doc(db, 'post', id), newFileds);
