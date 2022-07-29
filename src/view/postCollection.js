/* eslint-disable no-use-before-define */
import {
  getPostBD, deletePost, getPostEdit, updatePost,
} from '../firebase/funcionesFirestore.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';

const dataUser = objectsLocalStorage();
function TemplateViewPost(
  idPost,
  idUser,
  contentPost,
  urlImg,
  userName,
  userImg,
  status,
  time,
) {
  const postCollectionTemplate = `
      <div class = "postByUser" id='${idPost}'>
        <img src="${userImg}" width="50px">
        <h4>${userName}  </h4>
        <span> ${time}</span>
        <span> ${status}</span>
      </div>
      <div class = "idUser-postEdit" id = '${idUser}' data-id = "${idPost}"></div>
        <p> ${contentPost} </p>   
        <img src='${urlImg}' width="50px">
      <div id="containerDelete"></div>
      <dialog id="modalUpdatePost" class="row-center"></dialog>`;
  return postCollectionTemplate;
}

function EditDeletTemplate(idPost) {
  const template = `   
      <button id = "update-post" data-id = ${idPost}>Editar</button>
      <button class = "delete-post" data-id = ${idPost}>Eliminar</button>  
  `;
  return template;
}

export const mostrarPost = async (idPostContainer) => {
  const contenedorPost = document.getElementById(idPostContainer);
  getPostBD((querySnapshot) => {
    let postViewContent = '';
    querySnapshot.forEach((doc) => {
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
      );
    });
    contenedorPost.innerHTML = postViewContent;
    editDeletePost(contenedorPost);
  });
};

function editDeletePost(contenedorPost) {
  const editPost = document.querySelectorAll('.idUser-postEdit');
  editPost.forEach((elements) => {
    const userIdPost = elements.id;
    const idPostPublicado = elements.dataset.id;
    if (userIdPost === dataUser.uid) {
      elements.innerHTML = EditDeletTemplate(idPostPublicado);
      elements.addEventListener('click', () => {
        console.log('quieres eliminar o editar?');
        eliminarPost(contenedorPost);
        actualizarPost(contenedorPost);
      });
    }
  });
}

function eliminarPost(contenedorPost) {
  const btnDelete = contenedorPost.querySelectorAll('.delete-post');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      deletePost(event.target.dataset.id);// el target saca el id
    });
  });
}

const templateEditModal = (newPost) => {
  const editModalContent = `
  <form id="postForm">
    <textarea placeholder="Escribe Algo ..." id='inputUpdatedText'>${newPost}</textarea>    
    <div class="buttonGeneralPublication">
      <button id = "saveUpdate"  type="submit">Guardar</button>
      <button id = "cancelUpdate" >Cancelar</button>
    </div>
  </form>`;

  return editModalContent;
};

function actualizarPost(contenedorPost) {
  const btnEdit = contenedorPost.querySelector('#update-post');
  const postUser = document.querySelectorAll('.postByUser');
  btnEdit.addEventListener('click', (e) => {
    const idBtnPost = e.target.dataset.id;
    postUser.forEach(async (post) => {
      if (idBtnPost === post.id) {
        const postData = await getPostEdit(post.id);
        // console.log(postData.data());
        const modalUpdate = document.querySelector('#modalUpdatePost');
        modalUpdate.innerHTML = templateEditModal(postData.data().contentPost);
        modalUpdate.showModal();
        modalUpdate.querySelector('#saveUpdate').addEventListener('click', () => {
          const newTextPost = document.querySelector('#inputUpdatedText').value;
          console.log(newTextPost);
          updatePost(post.id, {
            contentPost: newTextPost,
          });
          modalUpdate.close();
        });
        modalUpdate.querySelector('#cancelUpdate').addEventListener('click', () => modalUpdate.close());
      }
    });
  });
}
