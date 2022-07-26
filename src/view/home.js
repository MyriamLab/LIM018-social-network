//  import objectsLocalStorage from '../firebase/funcionesLocalStorage.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  /* const userLocal = objectsLocalStorage.userLocalStorage();
  console.log(userLocal); */

  const headerHomeTemplate = `
        <div class="header flex-direction padd-05 space-around">

            <div class="divLogo">
                <img class="imgSize" src="./imagenes/logo-pets.png" alt="logo">      
            </div>

            <div>
            <input placeholder="Buscar amigos">
            </div>

            
            <div>
                <img class="imgSize center" src="./imagenes/inicio-casa.png" id="imgHome" class=titulo-header" alt="home">
            </div>
            
            <div>
                <img class="imgSize" src="./imagenes/amigos.png" id="imgFriends"class=titulo-header" alt="amigos">
            </div>
            
            <div>
                <img class="imgSize" src="./imagenes/pets.png" id="imgPets"class=titulo-header" alt="home mascotas">
            </div>
            
            <div class="enlacePerfil">
                <a imgSize href="#/rutaPerfilUsuario"><img src="${userObject.imgUsuario}" class="imagenUsuario"></a>
                <p>${userObject.name}</p>              
            </div>

        </div>
        <div>
        </div>
                 
        `;
  const headerElement = document.createElement('header');
  headerElement.setAttribute('class', 'headerSec');
  headerElement.innerHTML = headerHomeTemplate;

  return headerElement;
};
