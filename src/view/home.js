//  import objectsLocalStorage from '../firebase/funcionesLocalStorage.js';
import { singOut } from '../firebase/funcionesAuth.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  /* const userLocal = objectsLocalStorage.userLocalStorage();
  console.log(userLocal); */

  const headerHomeTemplate = `
        <div class="header flex-direction space-around">

            <div class="divLogo" id ="imgLogo">
                <img class="imgSize" src="./imagenes/logo-pets.png" alt="logo">      
            </div>
 
            <div >
                <a class="a"href="#/home">
                <img class="imgSize center" src="./imagenes/inicio-casa.png" id="imgHome" class=titulo-header" alt="home">
                <p>Inicio</p>
                </a>
            </div>
            
            <div>
                <a class="a" href="#/friends">
                <img class="imgSize" src="./imagenes/amigos.png" id="imgFriends"class=titulo-header" alt="amigos">
                <p>Amigos</p>
                </a>
            </div>
            
            <div>
                <a class="a" href="#/registerPets">
                <img class="imgSize" src="./imagenes/mascota.png" id="imgPets"class=titulo-header" alt="home mascotas">
                <p>Mascotas</p>
                </a>
            </div>
            
            <div class="enlacePerfil">
                <a class="a" href="#/perfil"><img src="${userObject.imgUsuario}" class="imagenUsuario"  width="50px">
                <p>${userObject.name}</p>
                </a>              
            </div>
            <div class = "homeLogOut">
                  <i class="fa fa-sign-out" id="btnCerrarSesion"></i>                    
            </div>
        </div>
       
                 
        `;
  const headerElement = document.createElement('section');
  headerElement.setAttribute('class', 'headerSec');
  headerElement.innerHTML = headerHomeTemplate;

  return headerElement;
};

export const cerrarSesion = (btnCerrarSesion) => {
  document.getElementById(btnCerrarSesion).addEventListener('click', () => {
    singOut().then(() => {
      // Sign-out successful.
      window.location.hash = '#/login';
      document.getElementById('headerContainer').style.display = 'none';
    }).catch(() => {

    });
  });
};
