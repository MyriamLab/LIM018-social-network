import { cargarImg } from '../firebase/funcionesStorage.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
import { crearMascota, verPets } from '../firebase/funcionesFirestore.js';

const userDate = objectsLocalStorage();

export const registerPets = () => {
  const viewRegisterPetsTemplate = ` 
 
<div class = "divRegisterPets">    
    <h3>Registra a tu mascota</h3> 
         
        <div class = "divFormPets" >
            <div class="groupPets">
                <input id="idNameRegister" type="text" placeholder="Name" required>
            </div>
            <div class="groupPets">               
                <textarea id = "idTextareaRegPets" name="textareaRegPets"
                placeholder = "¿Quieres contarnos algo...? "rows="4" cols="30"></textarea>  
            </div>
            <div class="imgFile">          
                  <div class="file">
                    <label for="cargarImgPets">
                      <img id="imgPets" for="cargarImgPets" class="imgUserPost" src="../imagenes/galeria.png">
                    </label>
                    <input  id="cargarImgPets" type="file">
                  </div>
              
                  <div>
                    <img id = "imgLoadPets" src="" height="50">
                  </div>                 
                </div> 
            <div class="buttonsRegister">
                <button class="buttons" id="idButtonRegisterPets">Registrar</button>
                <button class="buttons" id="regCancel">Cancelar</button>
            </div>
        </div> 
   
</div>
<div class="containerPetsRegistradas" id="containerPetsRegistradas"></div>
 `;
  const crearPostElement = document.createElement('section');
  crearPostElement.setAttribute('class', 'containerCrearPets');
  crearPostElement.innerHTML = viewRegisterPetsTemplate;
  return crearPostElement;
};

export function previewFilePets() {
  const preview = document.querySelector('#imgLoadPets');
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

export const crearPets = () => {
  const idButtonPost = document.getElementById('idButtonRegisterPets');
  const inputImg = document.getElementById('cargarImgPets');
  inputImg.addEventListener('change', previewFilePets);
  console.log('img previa');

  idButtonPost.addEventListener('click', async () => {
    const contentPets = document.getElementById('idTextareaRegPets').value;
    const namePets = document.getElementById('idNameRegister').value;
    const inputTypeFile = document.getElementById('cargarImgPets');

    let imgPets = '';
    if (inputTypeFile.value) {
      const file = document.querySelector('input[type=file]').files[0];
      imgPets = await cargarImg(file.name, file);
    }
    if (inputTypeFile.value || contentPets || namePets) {
      // llamar al método crear post idUser, namePets, imgPets, infoPets
      crearMascota(userDate.uid, namePets, imgPets, contentPets);
      console.log('llego al final, se registro mascota');
    }
  });
  // document.querySelector('#imgLoad').style.display = 'flex';
  mostrarPets();
};

export function TemplateViewPets(
  idPets,
  idUser,
  imgPets,
  namePets,
  infoPets,
) {
  const viewPostTemplate = `
        <div class="padd-15 box-cPost viewPost">
          <div class = "flex-direction  postByUser" id='${idPets}'>
            <img class ="imgUserPost imgPostv" src="${imgPets}">
            <div class="group">
              <h4>${namePets}  </h4>                    
            </div>
            <div class = "idUser-postEdit" id = '${idUser}' data-id = "${idPets}">
            </div>                 
          </div>
    
          <div class="box-postView">
            <p> ${infoPets} </p>   
                  
          </div>      
          
          <div id="containerDeletePets"></div>
          <dialog id="modalUpdatePostPets" class="row-center"></dialog>
          <dialog id="modalDeletePostPets" class="row-center"></dialog>
    
        </div>`;
  return viewPostTemplate;
}

export const mostrarPets = async () => {
  // mostrar postidPets,
  const contenedorPost = document.getElementById('containerPetsRegistradas');
  verPets((querySnapshot) => {
    let postViewContent = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      const idPets = doc.id;
      postViewContent += TemplateViewPets(
        idPets,
        data.idUser,
        data.imgPets,
        data.namePets,
        data.infoPets,
      );
    });
    contenedorPost.innerHTML = postViewContent;
  });
};
