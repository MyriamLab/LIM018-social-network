/* eslint-disable max-len */
import {
  db,
  getDoc,
  doc,
  setDoc,
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

export const getUserBD = (uid) => {
  const dataUser = getDoc(doc(db, 'users', uid)).then((userData) => userData.data());
  return dataUser;
};
