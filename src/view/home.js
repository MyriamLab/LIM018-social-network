//  import objectsLocalStorage from '../firebase/funcionesLocalStorage.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  console.log(userInfo);
  const userObject = JSON.parse(userInfo);
  console.log(userObject.imgUsuario);
  /* const userLocal = objectsLocalStorage.userLocalStorage();
  console.log(userLocal); */

  const headerHomeTemplate = `
        <div class="flex-direction divHeader navHeaderIcons">

            <div class="divLogo">
                <img src="./imagenes/logo-pets.png" alt="logo">      
            </div>

            <div>
                <input placeholder="search">
            </div>       
            
            <div>
                <img src="./imagenes/inicio-casa.png" id="imgHome" class=titulo-header" alt="home">
            </div>
            
            <div>
                <img src="./imagenes/amigos.png" id="imgFriends"class=titulo-header" alt="amigos">
            </div>
            
            <div>
                <img src="./imagenes/pets.png" id="imgPets"class=titulo-header" alt="home mascotas">
            </div>
            
            <div class="enlacePerfil">
                <a href="#/rutaPerfilUsuario"><img src="${userObject.imgUsuario}" class="imagenUsuario"></a>
                <p>${userObject.name}</p>              
            </div>

            <div>
               <img id="cerrar-sesion" src="imagenes/menu.png">
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
