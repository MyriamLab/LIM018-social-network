import {
  userLogin,
  proveedorGoogle,
  googleInicioSesion,
  proveedorFacebook,
  facebookInicioSesion,
} from '../firebase/config.js';

export default () => {
  const viewLoginTemplate = `        
    <div class="divHeaderLogin">
        <h4>¿Aún no tienes una cuenta?</h4>   
        <a href="#/register">   
        <button class="buttons">Crear Cuenta</button> 
        </a>   
      </div>
     <div class="divHeaderLogin">
        <h4>¿Aún no tienes una cuenta?</h4>   
        <a href="#/registerPets">   
        <button class="buttons">Crear mascota</button> 
        </a>   
    </div>

    <div class="divContainerImgForm">
        <div class ="divImgLogin">
            <img src ="./imagenes/portada-dogs.png" alt="imágen de perritos y redes sociales">
          </div>    
       
        <div class="divFormLogin">
          <figure>
              <img src="./imagenes/dog.png" alt="logo">      
           </figure>
           
          <div class="form-container">        
            <h3>Login</h3>
            <form class='formLogin' id="idFormLogin">
               
                <div class="group">
                  <input id="idEmailLogin" type="email" placeholder="example@gmail.com" required>
                </div>
                <div class="group">
                  <input id="idPasswordLogin" type="password" placeholder="password" required>
                </div>
                <div class="buttonClass">                
                  <button class="buttons id="idButtonLogin" type="submit">Inciar sesión</button>                
                </div>
            </form>             
            <div class="socialmedia">
              <h4>o inicia sesión con</h4>            
              <div class="socialmediaOptions">
                <img id="idImgFacebook" src="./imagenes/facebook.png" alt="ícono Facebook">
                <img  id="idImgGoogle" src="./imagenes/google.png" alt="ícono Google">
              </div> 
            </div> 
          </div> 
        </div>
     </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLoginTemplate;
  divElement.setAttribute('class', 'divForm');
  return divElement;
};

export const iniciarSesion = (selectorForm) => {
  const formLogin = document.getElementById(selectorForm);
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailLogin = document.getElementById('idEmailLogin').value;
    const passwordLogin = document.getElementById('idPasswordLogin').value;

    // metodo que reciba email y pass y que inicie sesion
    userLogin(emailLogin, passwordLogin)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(`${user}logeado`);
      // ...llamar const de agregar mascota
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no se logeó', errorCode, errorMessage); // ..
      });
  });

  //  inicio de sesión con cuenta de google
  const googleLogin = document.getElementById('idImgGoogle');
  googleLogin.addEventListener('click', () => {
  //  implementar método de conexión
    googleInicioSesion(proveedorGoogle)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(`${user} inicó sesión desde google`);
      // ... REDIRIGIR A UNA VISTA
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no se logeó con GOOGLE', errorCode, errorMessage); // ..
      });
  });

  //  inicio sesión con facebook
  const facebookLogin = document.getElementById('idImgFacebook');
  facebookLogin.addEventListener('click', () => {
    facebookInicioSesion(proveedorFacebook)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(`${user} inicó sesión desde FACEBOOK`);
      // ... REDIRIGIR A UNA VISTA
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no se logeó con FACEBOOK', errorCode, errorMessage); // ..
      });
  });
};
