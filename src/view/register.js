import { userRegister, userRegisterBD } from '../firebase/config.js';

export default () => {
  const viewRegisterTemplate = `
      <div class="divHeaderLogin">
        <h4>¿Ya tienes una cuenta?</h4>   
        <a href="#/login">   
        <button class="buttons">Iniciar Sesión</button> 
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
              <h3>Regístrate</h3>
              <form class='formLogin' id="formRegister">          
                  <input id="idNameRegister" type="text" placeholder="Name" required>
                  <input id="idLastNameRegister" type="text" placeholder="LastName" required>
                  <input id="idEmailRegister" type="email" placeholder="email" required>
                  <input id="idPasswordRegister" type="password" placeholder="Password" required> 
                  <label class="date justificar">Date: </label>
                  <input id="idDateRegister" type="date" placeholder="Date" required>
                  <label for="gender" class="gender justificar">Gender: </label>
                  <div class="divGender">
                    <input type="radio" name="genderRegister" value="Male">Male
                    <input type="radio" name="genderRegister" value="Female" checked="checked">Female
                  </div>
                  <div class="buttonClass">              
                    <button class="buttons id="idButtonRegister" type="submit">Registrarse</button>
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
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'divForm');
  divElement.innerHTML = viewRegisterTemplate;

  return divElement;
};

// Aqui creamos una const registroCorreo donde almacenamos el evento submit del form
export const registroCorreo = (selectorForm) => {
  const formRegister = document.getElementById(selectorForm);
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameRegister = document.getElementById('idNameRegister').value;
    const lastnameRegister = document.getElementById('idLastNameRegister').value;
    const dateRegister = document.getElementById('idDateRegister').value;
    const sexRegister = document.getElementsByName('genderRegister');
    let sexUser;
    for (let i = 0; i < sexRegister.length; i + 1) {
      if (sexRegister[i].checked) {
        sexUser = sexRegister[i].value;
      }
    }

    const emailRegister = document.getElementById('idEmailRegister').value;
    const passwordRegister = document.getElementById('idPasswordRegister').value;
    console.log('estoy aqui');

    // registra el email y password autenticar
    userRegister(emailRegister, passwordRegister)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        console.log(emailRegister, ' ', passwordRegister, ' registrado');
        // registra el los datos el dusuario
        userRegisterBD(user.uid, emailRegister, nameRegister, lastnameRegister, dateRegister, sexUser, passwordRegister);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('falló el registro', errorCode, errorMessage);
        // ..
      });
  });
};
