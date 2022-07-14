import formLogin from './login.js';
import formRegisters from './register.js';
import formRegisterPets from './registerPets.js';
import home from './muro.js';

const components = {
  login: formLogin,
  register: formRegisters,
  registerPets: formRegisterPets,
  homeUser: home,
};

export { components };
