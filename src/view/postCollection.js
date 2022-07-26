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
            <div class="margin-t  padd-15">  
                <div id="MainPost" class="flex-direction size-70">
                    <img src="${userObject.imgUsuario}" alt="foto usuario">
                    <div class="padd-05" id="namePublic">
                      <h2>${userObject.name}</h2>
                      <p>¡Hola a todos!</p>                      
                    </div>
                    
          <textarea name="textarea" rows="4" cols="50">Comentar</textarea>
                
            </div>
            <div class=" m-label size-70" >
               
          <div class=" public flex-direction row-end " >
            
              <img src="#" alt="Foto">
              <img src="#" alt="">
              <select id="selectPublic">
                <option>Público</option>
                <option>Privado</option>
              </select>
           
              <button id="buttonCrearPost">Comentar</button>
            
          </div>
        </div> 
                     
            `;
  const PostCollectionElement = document.createElement('section');
  PostCollectionElement.setAttribute('class', 'containerPostCollection');
  PostCollectionElement.innerHTML = postCollectionTemplate;

  return PostCollectionElement;
};
