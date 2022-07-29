import { createPost } from '../firebase/funcionesFirestore.js';
import { mostrarPost } from './postCollection.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';

const userDate = objectsLocalStorage();

export default () => {
  const crearPostTemplate = `
          <div class="padd-15">  
              <div  id="MainPost" class="flex-direction size-70">

                <div>
                  <img src="${userDate.imgUsuario}" alt="foto de perfil del usuario">

                  <div id="namePublic" class="">
                    <h2>${userDate.name}</h2> 
                  </div>  
                </div> 

                <textarea id = "idPostTextarea" name="textarea"
                placeholder = "¿Quieres contarnos algo...?"></textarea>
    
              </div>
            
              <div class=" size-70" >
               
                <div class=" public flex-direction row-end " >
                    <img src="#" alt="Foto">
                    <img src="#" alt="">
                    <select id="selectPublic">
                      <option>Público</option>
                      <option>Privado</option>
                    </select>
                 
                    <button id="buttonCrearPost">Publicar</button>
                    <button>Cancelar</button>
                  
                </div>
              </div>       
          </div>
          <div id = "post-container"></div>
                   
          `;
  const crearPostElement = document.createElement('section');
  crearPostElement.setAttribute('class', 'containerCrearPost');
  crearPostElement.innerHTML = crearPostTemplate;

  return crearPostElement;
};

export const crearPost = (idButton) => {
  const idButtonPost = document.getElementById(idButton);
  idButtonPost.addEventListener('click', () => {
    const contentPost = document.getElementById('idPostTextarea').value;
    createPost(userDate.uid, contentPost, 'urlImg', userDate.name, userDate.imgUsuario, 'público');
  });
  mostrarPost('post-container');
};
