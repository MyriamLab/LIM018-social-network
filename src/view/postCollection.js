import { getPostBD, deletePost } from '../firebase/funcionesFirestore.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  const postCollectionTemplate = `
        
            <img src="${userObject.imgUsuario}" alt="foto usuario">
            <div class="padd-05" id="namePublic">
              <h2>${userObject.name}</h2>
                                 
            </div>    
            `;
  const PostCollectionElement = document.createElement('section');
  PostCollectionElement.setAttribute('class', 'containerPostCollection');
  PostCollectionElement.innerHTML = postCollectionTemplate;

  return PostCollectionElement;
};

export const mostrarPost = async (idPostContainer) => {
  const postContainer = document.getElementById(idPostContainer);
  getPostBD((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      html += `
            <div> 
                <p>${data.post}</p>
                <button class = 'btn-delete-post' data-id = "${doc.id}">Delete</button>
            </div>                    
        `;
    });
    postContainer.innerHTML = html;
    const btnDelete = postContainer.querySelectorAll('.btn-delete-post');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deletePost(event.target.dataset.id);// el target saca el id
      });
    });
  });
};
