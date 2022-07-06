import { userRegister, userRegisterBD } from '../firebase/config.js';

export default () => {
  const viewRegisterTemplate = `
   
        <form id="formRegister">
            <label>NOMBRE</label>
            <input id="idNameRegister" type="text">
            <label>APELLIDO</label>
            <input id="idLastNameRegister" type="text">
            <label>EMAIL</label>
            <input id="idEmailRegister" type="email">
            <label>FECHA DE NACIMIENTO</label>
            <input id="idDateRegister" type="date">
            <label>SEXO</label>
            <label for="gender">Gender: </label>
              <input type="radio" name="genderRegister" value="Male">Male
              <input type="radio" name="genderRegister" value="Female" checked="checked">Female
            <label>CONTRASEÑA</label>
            <input id="idPasswordRegister" type="password">            
            <button id="idButtonRegister" type="submit">Ingresar</button>
        </form> 
      
  `;
  const divElement = document.createElement('div');

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
    for (let i = 0; i < sexRegister.length; i++) {
      if (sexRegister[i].checked) {
        sexUser = sexRegister[i].value;
      }
    }

    const emailRegister = document.getElementById('idEmailRegister').value;
    const passwordRegister = document.getElementById('idPasswordRegister').value;
    // registra el name, lastname
    userRegisterBD(
      nameRegister,
      lastnameRegister,
      emailRegister,
      dateRegister,
      sexUser,
      passwordRegister,
    );
    // registra el email y password
    userRegister(emailRegister, passwordRegister)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(emailRegister, ' ', passwordRegister, ' registrado');
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        crossOriginIsolated.log('falló el registro');
        // ..
      });
  });
};
