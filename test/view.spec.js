import {
  userRegister,
} from '../src/firebase/funcionesAuth.js';

import { components } from '../src/view/groupView.js';

jest.mock('../src/firebase/config.js');
jest.mock('../src/firebase/funcionesAuth.js');

describe('register correo', () => {
  it('debería ser una función', () => {
    expect(typeof userRegister).toBe('function');
  });

  it('Debería devolver un elemento HTML', () => {
    expect(components.register() instanceof HTMLElement).toBe(true);
  });

  it('Debería de coincidir con el template', () => {
    expect(components.register()).toMatchSnapshot();
  });

  it('Deberia registrar un usuario nuevo', () => {
    const mainSection = document.createElement('section');
    mainSection.className = 'divForm';
    document.body.append(mainSection);
    mainSection.appendChild(components.register());

    const form = document.querySelector('#formRegister');
    form.click();

    const name = document.querySelector('#idNameRegister');
    name.value = 'laboratoria';
    const email = document.querySelector('#idEmailRegister');
    email.value = 'laboratoria@gmail.com';
    const pas = document.querySelector('#idPasswordRegister');
    pas.valur = '123456789';

    // userRegister(email, pas).mockResolvedValued
  });
});
