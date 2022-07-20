import { getPostBD } from '../firebase/funcionesFirestore.js';

export default () => {
  getPostBD((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  });

  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);

  const postInfo = localStorage.getItem('users');
  const postObject = JSON.parse(postInfo);
  console.log(postObject);

  const postCollectionTemplate = `
            <div class="">  
                <div id="MainPost" class="flex-direction">
                    <img src="${userObject.imgUsuario}" alt="foto de perfil del usuario">
                    <div id="namePublic">
                      <h2>${userObject.name}</h2>
                      <p>Hola a todos</p>                      
                    </div>
                    <img src="#" alt="icono de menú">   
                </div>
              
                <div>
                  <img src="#" alt="icono like">
                  <p>comentar</P>
                  <img src="#" alt="icono de publico">
                  <select>Publico</select>                  
                 
                </div>       
            </div>
                     
            `;
  const PostCollectionElement = document.createElement('section');
  PostCollectionElement.setAttribute('class', 'containerPostCollection');
  PostCollectionElement.innerHTML = postCollectionTemplate;

  return PostCollectionElement;
};
