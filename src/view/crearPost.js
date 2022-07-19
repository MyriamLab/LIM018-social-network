import { createPost } from '../firebase/funcionesFirestore.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  const crearPostTemplate = `
          <div class="">  
              <div id="MainPost" class="flex-direction">
                  <img src="${userObject.imgUsuario}" alt="foto de perfil del usuario">
                  <div id="namePublic" class="">
                    <h2>${userObject.name}</h2>
                    <img src="#" alt="icono de publico">
                    <select>
                      <option>público</option>
                      <option>privado</option>
                    </select>
                  </div>   
              </div>
            
              <div>
                <textarea id="idPostTextarea" placeholder="¿Quieres compartir algo?"></textarea>
                <div>
                    <img src="#" alt="cargar foto">
                    <button id="buttonCrearPost">Publicar</button>
                </div>
              </div>       
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
    /*
    getPostBD().then((postData) => {
      const dataPost = postData;
      console.log('éxito');
      //  guardando datos en el localstorage
      localStorage.setItem('post', JSON.stringify(dataPost));
      console.log(dataPost);
    }); */
  });
};
