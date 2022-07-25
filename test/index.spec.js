import { createUserWithEmailAndPassword } from '../src/firebase/config.js';
import { userRegister } from '../src/firebase/funcionesAuth.js';

jest.myMock('../src/firebase/config.js');
// eslint-disable-next-line no-console

describe('register correo', () => {
  it('debería ser una función', () => {
    expect(typeof userRegister()).toBe('function');
  });

  it('Debería retornar un objeto email y pass', () => userRegister('elisabeth@gmail.com', '12345678').then((user) => {
    expect(createUserWithEmailAndPassword(user, 'elisabeth@gmail.com', '12345678')).toBe('elisabeth@gmail.com', '12345678');
  }));
});
