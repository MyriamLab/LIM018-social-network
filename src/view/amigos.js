import { getUserColl } from '../firebase/funcionesFirestore.js';

export default () => {
  const viewTemplate = `
          <h3 class="amigosTitle padd-05 margin-t center">Mis amigos</h3>
          <div id="amigos" class="padd-15 box-cPost">           
          </div>`;
  const sectionElement = document.createElement('section');

  sectionElement.setAttribute('class', 'containerAmigos');
  sectionElement.innerHTML = viewTemplate;

  return sectionElement;
};

function TemplateViewAmigos(userName, userImg) {
  const viewPostTemplate = `
   
    <div class="padd-06 flex-direction viewAmigos">
      <img  src="${userImg}" alt="foto de perfil del usuario" width="50px"> 
     <div class="padd-05"> <span>${userName}</span></div>
    </div>
    `;
  return viewPostTemplate;
}

export const mostrarAmigos = async () => {
  const contenedorPost = document.getElementById('amigos');
  getUserColl((querySnapshot) => {
    let postViewContent = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      postViewContent += TemplateViewAmigos(data.name, data.imgUsuario);
    });
    contenedorPost.innerHTML = postViewContent;
  });
};
