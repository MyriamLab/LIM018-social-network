import {
  userLogin,
  proveedorGoogle,
  googleInicioSesion,
  userRegisterBD,
} from '../firebase/config.js';

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
              <span><img src="imagenes/google.png"></span>  Acceder con Google
            </button>
          </div>

          <div class="flex-direction space-around padd-05">
            <p>¿Aún no tienes una cuenta?</p>
            <a href="#/register">
             Regístrate
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

    // metodo que reciba email y pass y que inicie sesion
    userLogin(emailLogin, passwordLogin)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          alert('NO SE VERIFICÓ EL CORREO');
        } else {
          window.location.hash = '#/home';
          alert('logeado CORREO VERIFICADO');
        }
      // ...llamar const de agregar mascota
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('no se logeó', errorCode, errorMessage); // ..
      });
  });

  //  inicio de sesión con cuenta de google
  const googleLogin = document.getElementById('idImgGoogle');
  googleLogin.addEventListener('click', () => {
  //  implementar método de conexión
    googleInicioSesion(proveedorGoogle)
      .then((userCredential) => {
        console.log(proveedorGoogle.uid);
        // Signed in
        const user = userCredential.user;
        console.log(user);

        window.location.hash = '#/home';
        console.log(`${user} inicó sesión desde google`);
      // ... REDIRIGIR A UNA VISTA
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('no se logeó con GOOGLE', errorCode, errorMessage); // ..
      });
  });
};
