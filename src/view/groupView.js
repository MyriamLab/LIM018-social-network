import formLogin from './login.js';
import formRegisters from './register.js';
import formRegisterPets from './registerPets.js';
import home from './home.js';
import postCollection from './postCollection.js';
import crearPos from './crearPost.js';
//  import mensajeExito from './modalesMensajes.js';

const components = {
  login: formLogin,
  register: formRegisters,
  registerPets: formRegisterPets,
  homeUser: home,
  postCollect: postCollection,
  createPost: crearPos,
  // mensajeExito: modalesMensajes,
};

export { components };
