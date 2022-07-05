import { userRegister } from '../firebase/config.js';

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
            <input id="idSexRegister" type="radio">
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

    const emailRegister = document.getElementById('idEmailRegister').value;
    const passwordRegister = document.getElementById('idPasswordRegister').value;
    userRegister(emailRegister, passwordRegister)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        crossOriginIsolated.log('correos inválidos');
        // ..
      });
  });
};
