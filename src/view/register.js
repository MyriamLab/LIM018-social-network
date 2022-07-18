import { userRegister, sendEmailVerificationUser } from '../firebase/funcionesAuth.js';
import { userRegisterBD } from '../firebase/funcionesFirestore.js';

export default () => {
  const viewRegisterTemplate = `
  <div class="flex-direction divHeader">
        <div class="divLogo">
          <img src="./imagenes/logo-pets.png" alt="logo">      
        </div>
        <div class="flex-direction">
          <p>¿Ya tienes una cuenta?</p>   
          <a href="#/login">   
            <button>Iniciar sesión</button> 
          </a> 
        </div>
          
      </div>
      <div class="divContainerImgForm">
        <div class ="divImgLogin">
            <img src ="./imagenes/perts-redondo.png" alt="imágen de perritos y redes sociales">
        </div>
        <div class="divFormLogin">
          <figure>
          <img src="./imagenes/circulo-patita.png" alt="logo">        
           </figure>
           <div class="form-container">
              <h3>Regístrate</h3>
              <form class='formLogin' id="formRegister">          
                  <input id="idNameRegister" type="text" placeholder="Name" required>
                  <input id="idLastNameRegister" type="text" placeholder="LastName" required>
                  <input id="idEmailRegister" type="email" placeholder="email" required>
                  <input id="idPasswordRegister" type="password" placeholder="Password" required> 
                  
                  <div class="buttonClassCenter">              
                    <button  id="idButtonRegister" type="submit">Registrarse</button>
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
            window.location.hash = '#/registerPets';
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('falló el registro', errorCode, errorMessage);
      });
  });
};
