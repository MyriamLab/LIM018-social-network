import { getPostsByUser } from '../firebase/funcionesFirestore.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
import { TemplateViewPost } from './postCollection.js';

export default () => {
  const viewPostTemplate = `
  <div id="perfil" class= 'padd-15'>   
  </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('class', 'containerPerfil');
  sectionElement.innerHTML = viewPostTemplate;

  return sectionElement;
};

export const mostrarPostPerfil = async () => {
  const contenedorPost = document.getElementById('perfil');
  const postByUsers = await getPostsByUser(objectsLocalStorage().uid);
  let postViewContent = '';
  postByUsers.forEach((doc) => {
    const data = doc.data();
    const idPost = doc.id;
    postViewContent += TemplateViewPost(
      idPost,
      data.idUser,
      data.contentPost,
      data.urlImg,
      data.userName,
      data.userImg,
      data.status,
      data.time,
      data.likes.length,
    );
    contenedorPost.innerHTML = postViewContent;
  });
};
