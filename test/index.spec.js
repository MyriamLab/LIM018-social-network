import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from '../src/firebase/config.js';

import {
  userRegister,
  userLogin,
  googleInicioSesion,
  sendEmailVerificationUser,
} from '../src/firebase/funcionesAuth.js';

jest.mock('../src/firebase/config.js'); //  mock habilitado para cargar el config falso no el original
// eslint-disable-next-line no-console

describe('register correo', () => {
  it('debería ser una función', () => {
    expect(typeof userRegister).toBe('function');
  });

  it('Debería poder registrar a un usuario', () => userRegister('frontend.la', '123456')
    .then(() => {
      // console.log(createUserWithEmailAndPassword.mock.calls);
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('frontend.la');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

describe('Iniciar sesión', () => {
  it('debería ser una función', () => {
    expect(typeof userLogin).toBe('function');
  });

  it('Debería poder iniciar sesión', () => userLogin('frontend.la', '123456')
    .then(() => {
      // expect(createUserWithEmailAndPassword.mock.calls[0][0]).toBe('uid1');
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('frontend.la');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

describe('Iniciar sesión con google', () => {
  it('debería ser una función', () => {
    expect(typeof googleInicioSesion).toBe('function');
  });

  it('Debería poder iniciar sesión con google', () => googleInicioSesion('frontend.la')
    .then(() => {
      // expect(createUserWithEmailAndPassword.mock.calls[0][0]).toBe('uid1');
      expect(signInWithPopup.mock.calls[0][1]).toBe('frontend.la');
    }));
});

// describe('Envía correo de verificación', () => {
//   it('debería ser una función', () => {
//     expect(typeof sendEmailVerificationUser).toBe('function');
//   });

//   it('Debería poder enviar un correo de verificación', () => sendEmailVerificationUser()
//     .then(() => {
//       console.log(sendEmailVerification.mock.calls);
//       expect(signInWithPopup.mock.calls[0]).toBe();
//     }));
// });
