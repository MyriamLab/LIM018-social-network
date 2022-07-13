import formLogin from './login.js';
import formRegisters from './register.js';
import formRegisterPets from './registerPets.js';
import headerHome from './header.js';

const components = {
  login: formLogin,
  register: formRegisters,
  registerPets: formRegisterPets,
  header: headerHome,
};

export { components };
