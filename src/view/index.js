import login from './login.js';
import formRegisters from './register.js';
import formRegisterPets from './registerPets.js';

const components = {
  // eslint-disable-next-line object-shorthand
  login: login,
  register: formRegisters,
  registerPets: formRegisterPets,
};

export { components };
