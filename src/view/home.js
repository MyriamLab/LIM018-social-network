//  import objectsLocalStorage from '../firebase/funcionesLocalStorage.js';
import { singOut } from '../firebase/funcionesAuth.js';

export default () => {
  const userInfo = localStorage.getItem('users');
  const userObject = JSON.parse(userInfo);
  /* const userLocal = objectsLocalStorage.userLocalStorage();
  console.log(userLocal); */

  const headerHomeTemplate = `
        <div class="header flex-direction padd-05 space-around">

            <div class="divLogo" id ="imgLogo">
                <img class="imgSize" src="./imagenes/logo-pets.png" alt="logo">      
            </div>

            <div>
            <input placeholder="Buscar amigos" id="buscar">
            </div>
            
            <div>
                <img class="imgSize center" src="./imagenes/inicio-casa.png" id="imgHome" class=titulo-header" alt="home">
                <p>Inicio</p>
            </div>
            
            <div>
                <img class="imgSize" src="./imagenes/amigos.png" id="imgFriends"class=titulo-header" alt="amigos">
                <p>Amigos</p>

            </div>
            
            <div>
                <img class="imgSize" src="./imagenes/mascota.png" id="imgPets"class=titulo-header" alt="home mascotas">
                <p>Mascotas</p>
            </div>
            
            <div class="enlacePerfil">
                <a imgSize href="#/rutaPerfilUsuario"><img src="${userObject.imgUsuario}" class="imagenUsuario"  width="50px"></a>
                <p>${userObject.name}</p>              
            </div>
            <div>
                <button id="btnCerrarSesion">Cerrar Sesión</button>
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
