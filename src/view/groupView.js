import formLogin from './login.js';
import formRegisters from './register.js';
import formRegisterPets from './registerPets.js';
import home from './home.js';
import crearPos from './crearPost.js';
//  import mensajeExito from './modalesMensajes.js';

const components = {
  login: formLogin,
  register: formRegisters,
  registerPets: formRegisterPets,
  homeUser: home,
  createPost: crearPos,
  // mensajeExito: modalesMensajes,
};

export { components };
