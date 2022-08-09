import {
  proveedorGoogle,
} from '../firebase/config.js';

import {
  userLogin,
  googleInicioSesion,
} from '../firebase/funcionesAuth.js';

import {
  userRegisterBD,
  getUserBD,
} from '../firebase/funcionesFirestore.js';

import { modalLogin } from './modales.js';

export default () => {
  const viewLoginTemplate = `        
 
  <!--DIV IZQUIERDO-->
  <div class="flex-direction divContainerImgForm">
    <div class="divImgLogin">
      <img
        src="./imagenes/portada-dogs.png "
        alt="imágen de perritos y redes sociales"
      />
    </div>

    <!--DIV DERECHO-->
    <div class="row-center divFormLogin">
    <figure class="center padd-05">
        <img src="./imagenes/logo-pets.png" alt="logo" />
      </figure>

      <!--inicio form register-->
      <div class="form-container">
        <h3 class="center">¡Únete a nuestra comunidad!</h3>

        <form class="formLogin" id="idFormLogin">
          <label class="group m-label">E-mail</label>

          <input
            id="idEmailLogin"
            type="email"
            placeholder=" Ej:pets@gmail.com"
            required
          />

          <label class="group m-label"> Contraseña</label>
          <input
            id="idPasswordLogin"
            type="password"
            placeholder=" Mínimo 8 caracteres"
            required
          />

          <div class="center">
            <button id="idButtonLogin " type="submit">Iniciar sesión</button>
          </div>
        </form>

        <div class="center">
          <p>--- o ---</p>

          <div>
            <button id="idImgGoogle">
              <span ><img src="imagenes/google.png">Acceder con Google </span> 
            </button>
          </div>
          <dialog id="modalPadre" class="row-center"></dialog>
          <div class="flex-direction space-evenly padd-05">
            <p>¿No tienes una cuenta?</p>
            <a href="#/register">
             Regístrate aqui
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
  `;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = viewLoginTemplate;
  sectionElement.setAttribute('class', 'divForm');
  return sectionElement;
};

export const iniciarSesion = (selectorForm) => {
  const formLogin = document.getElementById(selectorForm);
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailLogin = document.getElementById('idEmailLogin').value;
    const passwordLogin = document.getElementById('idPasswordLogin').value;

    const mostrarModal = document.getElementById('modalPadre');

    // metodo que reciba email y pass y que inicie sesion
    userLogin(emailLogin, passwordLogin)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalLogin.correoNoVerificado();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 5000);
        } else {
          window.location.hash = '#/home';
        }
      // ...llamar const de agregar mascota
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalLogin.passwordIncorrecto();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        } else if (error.code === 'auth/user-not-found') {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalLogin.correoNoExistente();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        } else {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalLogin.error();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        }
      });
  });

  //  inicio de sesión con cuenta de google
  const googleLogin = document.getElementById('idImgGoogle');
  googleLogin.addEventListener('click', () => {
    const mostrarModal = document.getElementById('modalPadre');
    //  implementar método de conexión
    googleInicioSesion(proveedorGoogle)
      .then((userCredential) => {
        // un objeto para manipular los datos de google de cada usuario por medio del IUD
        const user = userCredential.user;
        userRegisterBD(user.uid, user.email, user.displayName, user.photoURL, '../imagenes/portada.jpg');
        getUserBD(user.uid).then((userData) => {
          const data = userData;
          const uidUser = user.uid;
          data.uid = uidUser;
          //  guardando datos en el localstorage
          localStorage.setItem('users', JSON.stringify(data));
        });

        window.location.hash = '#/home';
      // ... REDIRIGIR A UNA VISTA
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalLogin.error();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        }
      });
  });
};
