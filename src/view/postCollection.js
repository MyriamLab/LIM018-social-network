/* eslint-disable no-use-before-define */
import {
  getPostBD, deletePost, getPostEdit, updatePost,
} from '../firebase/funcionesFirestore.js';
import { objectsLocalStorage } from '../firebase/funcionesLocalStorage.js';
// import { countLike } from './likes.js';

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
  const viewPostTemplate = `
    <div class="padd-15 box-cPost viewPost">
      <div class = "flex-direction  postByUser" id='${idPost}'>
        <img class ="imgUserPost imgPostv" src="${userImg}">
        <div class="group">
          <h4>${userName}  </h4>
          <div>
            <span> ${status}</span>
            <span class="post-span"> ${time}</span>
          </div>          
        </div>
        <div class = "idUser-postEdit" id = '${idUser}' data-id = "${idPost}">
        </div>                 
      </div>

      <div class="box-postView">
        <p> ${contentPost} </p>   
        <img src='${urlImg}'>
       
      </div>
      <div class="padd-05">
        <button id="countLike">❤ Me gusta</button>
        <button id="comentar">✉  Comentar</button>   
      </div>
      
      <div id="containerDelete"></div>
      <dialog id="modalUpdatePost" class="row-center"></dialog>
    </div>`;
  return viewPostTemplate;
}

function EditDeletTemplate(idPost) {
  const template = ` 
  <span class = "postEdit" value="&#8943">&#8943</span>  
  <div class = "div-del-up">
      <p id = "update-post" data-id = ${idPost}>Editar</p>
      <p class = "delete-post" data-id = ${idPost}>Eliminar</p>  
  </div>        
  `;
  return template;
}

export const mostrarPost = async (idPostContainer) => {
  // const likes = countLike('countLike');
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
        // likes,
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

    console.log('id de usuario almacenado al momento de crear el post', userIdPost);
    console.log('user id, local', dataUser.uid);

    /** comparar el id del post con del usuario */
    if (userIdPost === dataUser.uid) {
      elements.innerHTML = EditDeletTemplate(idPostPublicado);
      elements.addEventListener('click', () => {
        console.log('quieres eliminar o editar?');

        /** accede a los métodos eliminar o actualizar */
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
      deletePost(event.target.dataset.id);// el target saca el id alamcenado en el html data-id=""
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
