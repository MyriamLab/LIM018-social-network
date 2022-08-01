import { components } from '../view/groupView.js';
import { registroCorreo } from '../view/register.js';
import { iniciarSesion } from '../view/login.js';
import { crearPost } from '../view/crearPost.js';
import { cerrarSesion } from '../view/home.js';
// import { mostrarUser } from '../view/aside.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const header = document.querySelector('#headerContainer');
  container.innerHTML = '';
  // const headerContainer = document.querySelector('header');

  switch (route) {
    case '': case '#/': case '#/login': {
      container.appendChild(components.login());
      iniciarSesion('idFormLogin');
      break;
      //    rompe el ciclo, y retorna solo el form de login
    }
    case '#/register': {
      container.appendChild(components.register());
      //  crea como hijo del container el formulario de registro
      registroCorreo('formRegister');
      //    recibe el id del formulario ya creado y realiza el evento "submit" desde
      //    registrocorreo que se encuentra en register.js
      break;
    }
    case '#/registerPets': {
      container.appendChild(components.registerPets());
      break;
      //    rompe el ciclo, y retorna solo el form de login
    }
    case '#/home': {
      header.appendChild(components.headerNet());
      cerrarSesion('btnCerrarSesion');
      container.appendChild(components.aside());
      // mostrarUser();
      container.appendChild(components.createPost());
      crearPost('buttonCrearPost');
      // mostrarPost('post-container');
      // container.appendChild(components.postCollect());
      break;
      //    rompe el ciclo, y retorna solo el form de login
    }
    default:
      break;
  }
  // console.log(route);
};
export { changeView };
