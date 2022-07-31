import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
// <img src="../imagenes/galeria.png" alt="imagen de galeria"  width ="30px"  >
/* eslint-disable no-use-before-define */
import { getUser } from '../firebase/funcionesFirestore.js';

const userDate = objectsLocalStorage();

export default () => {
  const crearPostTemplate = `
             <div class="box-aside">
                <img id ="imgPortada" src="${userDate.imgPortada}" alt="foto de perfil del usuario">
                <div id="contImg">
                  <img id ="imgUser" src="${userDate.imgUsuario}" alt="foto de perfil del usuario">
                </div>
                <div class="aside-h4">
                  <h4 class="center">${userDate.name}</h4>
                </div>

                <div class="padd-05 box-label">
                  <h4 class="padd-05">Mascotas</h4> 
                  <div class="padd-05 flex-direction" >
                    <img src="../imagenes/circulo-patita.png" alt="foto de perfil del usuario" width="50px">
                    <div class="padd-05">
                      <spam>Maya</spam>
                    </div>                
                  </div>                    
                </div>

                <div class="padd-05 box-label border-top">
                  <h4 class="padd-05">Amigos</h4> 
                  <div class="padd-05 flex-direction" id="content-user" >
                    
                  </div>
                </div>
                
                
                
              </div>          
                 
          `;
  const crearPostElement = document.createElement('aside');
  crearPostElement.setAttribute('class', 'containerAside');
  crearPostElement.innerHTML = crearPostTemplate;

  return crearPostElement;
};

export const mostrarUser = async () => {
  // const likes = countLike('countLike');
  const contenedorPost = document.getElementById('content-user');
  getUser((querySnapshot) => {
    let postViewContent = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data.imgUsuario, data.name);
      postViewContent += TemplateViewUser(data.imgUsuario, data.name);
    });
    contenedorPost.innerHTML = postViewContent;
  });
};

function TemplateViewUser(userName, userImg) {
  const viewPostTemplate = `
  <img  src="${userImg}" alt="foto de perfil del usuario" width="50px">
  <div class="padd-05" >
    <spam>${userName}</spam>
    </div>`;
  return viewPostTemplate;
}
