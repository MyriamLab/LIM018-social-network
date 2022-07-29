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
} from './config.js';

export const userRegisterBD = async (uid, email, name, lastname, imgUsuario, imgPortada) => {
  await setDoc(doc(db, 'users', uid), {
    email,
    name,
    lastname,
    imgUsuario,
    imgPortada,
  });
};

//  jalar datos desde firestore del usuario
export const getUserBD = (uid) => {
  const dataUser = getDoc(doc(db, 'users', uid)).then((userData) => userData.data());
  return dataUser;
};

export const createPost = async (idUser, contentPost, urlImg, userName, userImg, status) => {
  await addDoc(collection(db, 'post'), {
    idUser,
    contentPost,
    urlImg,
    userName,
    userImg,
    status,
    time: serverTimestamp(),
  });
};

//  jalar datos desde firestore de los post
export const getPostBD = (documento) => {
  const dataPost = onSnapshot(collection(db, 'post'), (documento));
  return dataPost;
};

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

export const getPostEdit = (id) => getDoc(doc(db, 'post', id));
export const updatePost = (id, newFileds) => updateDoc(doc(db, 'post', id), newFileds);
