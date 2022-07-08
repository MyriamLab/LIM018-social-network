import { components } from '../view/index.js';
import { registroCorreo } from '../view/register.js';
import { iniciarSesion } from '../view/login.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
    case '#/login': {
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
    default:
      break;
  }
  // console.log(route);
};
export { changeView };
