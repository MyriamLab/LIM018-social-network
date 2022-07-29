import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
// <img src="../imagenes/galeria.png" alt="imagen de galeria"  width ="30px"  >

const userDate = objectsLocalStorage();

export default () => {
  const crearPostTemplate = `
             <div class="box-aside">
                <img id ="imgPortada" src="${userDate.imgPortada}" alt="foto de perfil del usuario">
                <div id="contImg">
                  <img id ="imgUser" src="${userDate.imgUsuario}" alt="foto de perfil del usuario">
                </div>
                <h4>${userDate.name}</h4>
                <h4>Mascotas</h4> 
                <img src="../imagenes/circulo-patita.png" alt="foto de perfil del usuario" width="50px">
                <spam>Maya</spam>  
                
                <h4>Amigos</h4> 
                <img  src="../imagenes/usuario.png" alt="foto de perfil del usuario" width="50px">
                <spam>${userDate.name}</spam> 
              </div>          
                 
          `;
  const crearPostElement = document.createElement('aside');
  crearPostElement.setAttribute('class', 'containerAside');
  crearPostElement.innerHTML = crearPostTemplate;

  return crearPostElement;
};
