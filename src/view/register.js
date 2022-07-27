import { userRegister, sendEmailVerificationUser } from '../firebase/funcionesAuth.js';
import { userRegisterBD } from '../firebase/funcionesFirestore.js';
// eslint-disable-next-line import/no-cycle
//  import { components } from './groupView.js';
import { modalRegistro } from './modales.js';

export default () => {
  const viewRegisterTemplate = `
  
<div class="flex-direction divContainerImgForm">
  
  <div class="flex-direction center divImgLogin">
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
      
      <h3 class="center">Regístrate</h3>
      <form class="formLogin" id="formRegister">
        <label class="group m-label">Nombre</label>
        <input
          id="idNameRegister"
          type="text"
          placeholder="Ej: María"
          required
        />

        <label class="group m-label">Apellido</label>
        <input
          id="idLastNameRegister"
          type="text"
          placeholder="Ej: Flores"
          required
        />

        <label class="group m-label">E-mail</label>

        <input
          id="idEmailRegister"
          type="email"
          placeholder="pets@gmail.com"
          required
        />

        <label class="group m-label">Contraseña </label>

        <input
          id="idPasswordRegister"
          type="password"
          placeholder="Mínimo de 8 caracteres"
          required
        />

        <div class="buttonClass center">
          <button id="idButtonRegister" type="submit">Registrarse</button>
        </div>
        <dialog id="modalPadre" class="row-center"></dialog>
        <div class="flex-direction space-around padd-05">
        <p>¿Ya tienes una cuenta?</p>
        <a href="#/login">
         Inicia Sesión
        </a>
      </div>
      </form>
    </div>
  </div>
</div>
  `;
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('class', 'divForm');
  sectionElement.innerHTML = viewRegisterTemplate;

  return sectionElement;
};

// Aqui creamos una const registroCorreo donde almacenamos el evento submit del form
export const registroCorreo = (selectorForm) => {
  const formRegister = document.getElementById(selectorForm);
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameRegister = document.getElementById('idNameRegister').value;
    const lastnameRegister = document.getElementById('idLastNameRegister').value;
    const emailRegister = document.getElementById('idEmailRegister').value;
    const passwordRegister = document.getElementById('idPasswordRegister').value;

    const mostrarModal = document.getElementById('modalPadre');

    // registra el email y password autenticar
    userRegister(emailRegister, passwordRegister)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerificationUser()
          .then(() => {
            userRegisterBD(//  registro de usuario BD
              user.uid,
              emailRegister,
              nameRegister,
              lastnameRegister,
              'imagenes/usuario.png',
              'imagenes/portada.png',
            );
            //  alert('se registró el correo');
            mostrarModal.innerHTML = '';
            mostrarModal.innerHTML = modalRegistro.exito();
            mostrarModal.showModal();
            setTimeout(() => {
              mostrarModal.close();
              window.location.hash = '#/login';
            }, 5000);
          });
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          mostrarModal.innerHTML = modalRegistro.correoInvalido();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalRegistro.contraseñaDebil();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        } else if (error.code === 'auth/email-already-in-use') {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalRegistro.correoExistente();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        } else {
          mostrarModal.innerHTML = '';
          mostrarModal.innerHTML = modalRegistro.error();
          mostrarModal.showModal();
          setTimeout(() => {
            mostrarModal.close();
          }, 4000);
        }
      });
  });
};
