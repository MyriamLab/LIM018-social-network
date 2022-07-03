import { components } from '../view/index.js';
import { registroCorreo } from '../view/register.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/login': {
      container.appendChild(components.login());
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

    default:
      break;
  }
  // console.log(route);
};
export { changeView };
