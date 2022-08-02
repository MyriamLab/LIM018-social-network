import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
import { getUserColl } from '../firebase/funcionesFirestore.js';
import { registerPets } from '../view/registerPets.js';


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
                  <h4 class="padd-05">Mascotas 
                    <i class="material-icons addPetsIcon">add</i>
                  </h4>
                 
                  <div class="padd-05 flex-direction" >
                    <img src="../imagenes/circulo-patita.png" alt="foto de perfil del usuario" width="50px">
                    <div class="padd-05">
                      <span>Maya</span>
                    </div>                
                  </div>                    
                </div>

                <div class="padd-05 box-label border-top">
                  <h4 class="padd-05">Amigos</h4> 
                  <div class="padd-05" id="content-user" >
                    
                  </div>
                </div>            
              </div>
              <dialog id="containerRegPets">
              </dialog>        
                 
          `;
  const crearPostElement = document.createElement('aside');
  crearPostElement.setAttribute('class', 'containerAside');
  crearPostElement.innerHTML = crearPostTemplate;

  return crearPostElement;
};

export const mostrarUser = async () => {
  const contenedorPost = document.getElementById('content-user');
  getUserColl((querySnapshot) => {
    let postViewContent = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      postViewContent += TemplateViewUser(data.name, data.imgUsuario);
    });
    contenedorPost.innerHTML = postViewContent;
  });
  mostrarMascota();
};

function TemplateViewUser(userName, userImg) {
  const viewPostTemplate = `
  <div class="padd-05">
    <img  src="${userImg}" alt="foto de perfil del usuario" width="50px"> 
    <span>${userName}</span>
  </div>
  `;
  return viewPostTemplate;
}

const mostrarMascota = () => {
  const container = document.querySelector('#containerRegPets');

  const iconAddPets = document.querySelectorAll('.addPetsIcon');
  iconAddPets.forEach((addPets) => {
    addPets.addEventListener('click', () => {
      container.innerHTML = '';
      container.innerHTML = registerPets();
      container.showModal();
      document.getElementById('regCancel').addEventListener('click', () => container.close());
    });
  });
};
