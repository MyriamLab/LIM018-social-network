/* eslint-disable eol-last */
import { createPost } from '../firebase/funcionesFirestore.js';
import { mostrarPost } from './postCollection.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
import { cargarImg } from '../firebase/funcionesStorage.js';
// <img src="../imagenes/galeria.png" alt="imagen de galeria"  width ="30px"  >

const userDate = objectsLocalStorage();

export default () => {
  const crearPostTemplate = `
        <div id="create-post" class="padd-15">
          <div class="padd-15 box-cPost">
              <div  id="MainPost" class="flex-direction">
                <div>                
                  <img class="imgUserPost " src="${userDate.imgUsuario}" alt="foto de perfil del usuario" >                  
                </div> 
                <textarea id = "idPostTextarea" name="textarea"
                placeholder = "  ¿Quieres contarnos algo? "rows="4" cols="30"></textarea>    
              </div>

              
              <select class="selectPrivate margin-t-8" id="status">
                <option value="&#127758"> &#127758; Público</option>
                <option value="&#128274"> &#128274; Privado </option>
              </select>    
            
              <div class="flex-direction  flex-wrap divFinalCrearPost">  
                <div class="imgFile padd-05">          
                  <div class="file  flex-direction">
                       <p class=" pAgregarFoto">Agregar a tu publicación</p>
                       <label for="cargarImg"> 
                          <img id="imgPost" for="cargarImg" class="imgUserPost" src="./imagenes/galeria.png">
                        </label>
                      <input  id="cargarImg" type="file">
                  </div>
              
                  <div>
                    <img id = "imgLoad" src="" height="50">
                  </div>                 
                </div>  

            
              </div> 
              <div class="center">
              <button id="buttonCrearPost">Publicar</button>
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

export function previewFile() {
  const preview = document.querySelector('#imgLoad');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    // convierte la imagen a una cadena en base64
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

export const crearPost = (idButton) => {
  const idButtonPost = document.getElementById(idButton);
  idButtonPost.disabled = false;
  const inputImg = document.getElementById('cargarImg');
  inputImg.addEventListener('change', previewFile);

  idButtonPost.addEventListener('click', async () => {
    const contentPost = document.getElementById('idPostTextarea').value;

    const getStatusPost = document.getElementById('status');
    const status = getStatusPost.selectedOptions[0].value;
    console.log(status);

    const inputTypeFile = document.getElementById('cargarImg');

    let imgPost = '';
    if (inputTypeFile.value) {
      const file = document.querySelector('input[type=file]').files[0];
      imgPost = await cargarImg(file.name, file);
    }
    if (inputTypeFile.value || contentPost) {
      // llamar al método crear post
      createPost(userDate.uid, contentPost, imgPost, userDate.name, userDate.imgUsuario, status);
      document.getElementById('idPostTextarea').value = '';
      document.querySelector('#imgLoad').src = '';
      document.querySelector('input[type=file]').value = '';
    }
  });
  // document.querySelector('#imgLoad').style.display = 'flex';
  mostrarPost('post-container');
};
