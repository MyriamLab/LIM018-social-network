import {
  userRegister,
  userLogin,
  singOut,
  sendEmailVerificationUser,
  googleInicioSesion,
} from '../src/firebase/funcionesAuth.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  signInWithPopup,
} from '../src/firebase/config.js';
// import { components } from '../src/view/groupView.js';

jest.mock('../src/firebase/config.js');
// jest.mock('../src/firebase/funcionesAuth.js');

// describe('register correo', () => {
//   it('debería ser una función', () => {
//     expect(typeof userRegister).toBe('function');
//   });

//   it('Debería devolver un elemento HTML', () => {
//     expect(components.register() instanceof HTMLElement).toBe(true);
//   });

//   it('Debería de coincidir con el template', () => {
//     expect(components.register()).toMatchSnapshot();
//   });

//   it('Deberia registrar un usuario nuevo', () => {
//     const mainSection = document.createElement('section');
//     mainSection.className = 'divForm';
//     document.body.append(mainSection);
//     mainSection.appendChild(components.register());

//     const form = document.querySelector('#formRegister');
//     form.click();

//     const name = document.querySelector('#idNameRegister');
//     name.value = 'laboratoria';
//     const email = document.querySelector('#idEmailRegister');
//     email.value = 'laboratoria@gmail.com';
//     const pas = document.querySelector('#idPasswordRegister');
//     pas.valur = '123456789';

//     // userRegister(email, pas).mockResolvedValued
//   });
// });
// registroUsuario
describe('userRegister', () => {
  it('deberia ser una funcion', () => {
    expect(typeof userRegister).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => userRegister('front@end.la', '123456')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('front@end.la');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

// inicioSesionUsuario
describe('userLogin', () => {
  it('deberia ser una funcion', () => {
    expect(typeof userLogin).toBe('function');
  });
  it('Debería poder iniciar sesion', () => userLogin('front@end.la', '123456')
    .then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('front@end.la');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

// envioCorreoVerificacion
describe('sendEmailVerificationUser', () => {
  it('debería ser una función', () => {
    expect(typeof sendEmailVerificationUser).toBe('function');
  });
  it('', () => sendEmailVerificationUser()
    .then(() => {
      // console.log(auth.mock.currentUser);
      expect(sendEmailVerification.mock.calls).toHaveLength(1);
    }));
});

// googleInicioSesion
describe('googleInicioSesion', () => {
  it('debería ser una función', () => {
    expect(typeof googleInicioSesion).toBe('function');
  });
  const provider = { id: 123, correo: 'hola@gmail.com' };
  it('proveedor', () => googleInicioSesion(provider).then(() => {
    expect(signInWithPopup.mock.calls[0][1]).toBe(provider);
  }));
});

// cierreActividadUsuario
describe('singOut', () => {
  it('deberia cerrar sesion', () => singOut()
    .then(() => {
      expect(signOut.mock.calls[0][1]).toBe(undefined);
    }));
});
