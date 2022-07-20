export const modalRegistro = {

  correoInvalido: () => {
    const errorMensaje = `
        <div class= "smsModal modalError" id="modalCorreoInvalido">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">Ingresaste un correo inválido.</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },

  correoExistente: () => {
    const exitoMensaje = `
        <div class= "smsModal modalError" id="modalCorreoExistente">
          <i class="fas fa-check-circle"></i>
          <p>Ya tienes una cuenta existente.</p>
        </div>
      `;
    return exitoMensaje;
  },

  contraseñaDebil: () => {
    const exitoMensaje = `
        <div class= "smsModal modalError" id="modalContraseñaDebil">
          <i class="fas fa-check-circle"></i>
          <p>La contraseña debe contener al menos 6 carácteres.</p>
        </div>
      `;
    return exitoMensaje;
  },

  exito: () => {
    const exitoMensaje = `
        <div class= "smsModal modalExito" id="modalExito">
          <i class="fas fa-check-circle"></i>
          <p>Revisa tu correo electrónico para confirmar registro.</p>
        </div>
      `;
    return exitoMensaje;
  },
};
