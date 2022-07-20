// importamos la funcion que vamos a testear
// eslint-disable-next-line no-unused-vars
import { iniciarSesion } from '../src/view/login.js';
import * as config from '../src/firebase/config.js';

jest.mock('../src/firebase/config.js');
// eslint-disable-next-line no-console
console.log(config);

/*
describe('createUserWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */
