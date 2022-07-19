/* eslint-disable max-len */
import {
  db,
  getDoc,
  doc,
  setDoc,
  addDoc,
  collection,
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

export const createPost = async (uid, post, datePost, state) => {
  await addDoc(collection(db, 'post'), {
    uid,
    post,
    datePost,
    state,
  });
};

//  jalar datos desde firestore de los post
export const getPostBD = () => {
  const dataPost = getDoc(doc(db, 'post')).then((postData) => postData.data());
  return dataPost;
};
