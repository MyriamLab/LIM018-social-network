import { userLogin } from '../firebase/config.js';

export default () =>{
    const viewLoginTemplate = `        
    <div class="divHeaderLogin">
        <h4>¿Aún no tienes una cuenta?</h4>      
        <button class="buttons">Crear Cuenta</button>    
    </div>

    <div class="divContainerImgForm">
        <div class ="divImgLogin">
            <img src ="./imagenes/portada-dogs.png" alt="imágen de perritos y redes sociales">
        </div>    
       
        <div class="divFormLogin"> 
          <img src="./imagenes/dog.png" alt="logo">       
          <div class="form-container">        
            <h3>Login</h3>
            <form class='formLogin' id="idFormLogin">
                <div class="group">
                  <label class="labelLogin" for = "idEmailLogin">E-mail</label>
                </div>
                <div class="group">
                  <input id="idEmailLogin" type="email">
                </div>
                <div class="group">
                  <label class="labelLogin" for = "idPasswordLogin">Password</label>
                </div>
                <div class="group">
                  <input id="idPasswordLogin" type="password">
                </div>
                <div class="buttonClass">
                  <button class="buttons" id="idButtonLogin" type="submit">Inciar sesión</button>
                </div>
            </form>             
            <div class="socialmedia">
              <h4>o inicia sesión con</h4>            
              <div class="socialmediaOptions">
                <img src="./imagenes/facebook.png" alt="ícono Facebook">
                <img src="./imagenes/google.png" alt="ícono Google">
              </div> 
            </div> 
          </div> 
        </div>
    </div>
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLoginTemplate;
  divElement.setAttribute('class', 'divForm');
  return divElement;
};

export const iniciarSesion = (selectorForm) => {
  let formLogin = document.getElementById(selectorForm);
  formLogin.addEventListener('submit',(e) => {
    e.preventDefault();

    let emailLogin=document.getElementById('idEmailLogin');
    let passwordLogin=document.getElementById('idPasswordLogin');

    // metodo que reciba email y pass y que inicie sesion
    userLogin(emailLogin,passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user + 'logeado');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("no se logeó");
      // ..
    });

  })   

}

/*

let buttonLogin = document.getElementById("idButtonLogin");
buttonLogin.addEventListener("submit",sendLogin)

function sendLogin(){

   let email=document.getElementById("idEmailLogin").value;
   let password=document.getElementById("idPasswordLogin").value;
   console.log(email, " ", password);
}
*/
