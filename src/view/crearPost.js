import { createPost } from '../firebase/funcionesFirestore.js';
import { mostrarPost } from './postCollection.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
// <img src="../imagenes/galeria.png" alt="imagen de galeria"  width ="30px"  >

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
            
              <div class="size-70" >  
                <input id="cargarImg" type="file">
                <img id = "imgLoad" src="" height="200" alt="Image preview...">            
                <div class="public flex-direction row-end" >                                     
                    <select id="status">
                      <option value="publico"> &#127758; Público</option>
                      <option value="privado"> &#128274; Privado </option>
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
    const getStatusPost = document.getElementById('status');
    const status = getStatusPost.selectedOptions[0].value;

    // llamar al método crear post

    createPost(userDate.uid, contentPost, 'urlImg', userDate.name, userDate.imgUsuario, status);
  });
  mostrarPost('post-container');
};

// function previewFile() {
//   const preview = document.querySelector('img');
//   const file = document.querySelector('input[type=file]').files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', () => {
//     // convierte la imagen a una cadena en base64
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
