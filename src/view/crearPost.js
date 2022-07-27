import { createPost } from '../firebase/funcionesFirestore.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  const crearPostTemplate = `
          <div class="padd-15">  
              <div  id="MainPost" class="flex-direction size-70">

                <div>
                  <img src="${userObject.imgUsuario}" alt="foto de perfil del usuario">

                  <div id="namePublic" class="">
                    <h2>${userObject.name}</h2> 
                  </div>  
                </div> 

                <textarea id="idPostTextarea" name="textarea" rows="4" cols="50">¿Qué estás pensando ${userObject.name}?</textarea>
    
              </div>
            
              <div class="size-70" >
               
                <div class=" public flex-direction row-end " >
                    <img src="#" alt="Foto">
                    <img src="#" alt="">
                    <select id="selectPublic">
                      <option>Público</option>
                      <option>Privado</option>
                    </select>
                 
                    <button id="buttonCrearPost">Publicar</button>
                  
                </div>
              </div>       
          </div>
          <div class = "postDiv">
          </div>
                   
          `;
  const crearPostElement = document.createElement('section');
  crearPostElement.setAttribute('class', 'containerCrearPost');
  crearPostElement.innerHTML = crearPostTemplate;

  return crearPostElement;
};

export const crearPost = (idButton) => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);

  const idButtonPost = document.getElementById(idButton);
  idButtonPost.addEventListener('click', () => {
    const post = document.getElementById('idPostTextarea').value;

    //  llamar al método crear post
    //  createPost = (uid, post, datePost, state)
    createPost(userObject.uid, post, '', '');
    console.log('éxito');
  });
};
