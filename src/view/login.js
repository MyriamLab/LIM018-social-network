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
        
        <p>¿Aún no tienes una cuenta?</p>   
        <a href="#/register">   
          <button>Crear Cuenta</button> 
        </a>   
      </div>

    <div class="divContainerImgForm">
        <div class ="divImgLogin">
            <img src ="./imagenes/portada-dogs.png" alt="imágen de perritos y redes sociales">
          </div>    
       
        <div class="divFormLogin">
          <figure>
              <img src="./imagenes/circulo-patita.png" alt="logo">      
           </figure>
           
          <div class="form-container">        
            <h3>Iniciar Sesión</h3>
            <form class='formLogin' id="idFormLogin">
              
                <div class="group">
                  <input id="idEmailLogin" type="email" placeholder="example@gmail.com" required>
                </div>
                <div class="group">
                  <input id="idPasswordLogin" type="password" placeholder="password" required>
                </div>
                <div class="buttonClassCenter">                
                  <button  id="idButtonLogin" type="submit">Iniciar sesión</button>                
                </div>
            </form>             
            <div class="socialmedia">
              <p> o inicia sesión con</p>            
              <div class="socialmediaOptions">                
               <button  id="idImgGoogle" ><span class="icon-google"></span>  Regístrate con Google </button>
             
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

    // metodo que reciba email y pass y que inicie sesion
    userLogin(emailLogin, passwordLogin)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          console.log('NO SE VERIFICO EL CORREO - FALSE');
        } else {
          console.log('logeado CORREO VERIFICADO');
        }
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
