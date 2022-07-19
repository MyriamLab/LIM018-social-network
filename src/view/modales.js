export const modalRegistro = {

  correoInvalido: () => {
    const errorMensaje = `
        <div class= "modalError" id="modalCorreoInvalido">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Ingresaste un correo inválido.</p>
        </div>
      `;
    return errorMensaje;
  },

  correoExistente: () => {
    const exitoMensaje = `
        <div class= "modalError" id="modalCorreoExistente">
          <i class="fas fa-check-circle"></i>
          <p>Ya tienes una cuenta existente.</p>
        </div>
      `;
    return exitoMensaje;
  },

  contraseñaDebil: () => {
    const exitoMensaje = `
        <div class= "modalError" id="modalContraseñaDebil">
          <i class="fas fa-check-circle"></i>
          <p>La contraseña debe contener al menos 6 carácteres.</p>
        </div>
      `;
    return exitoMensaje;
  },

  exito: () => {
    const exitoMensaje = `
        <div class= "modalExito" id="modalExito">
          <i class="fas fa-check-circle"></i>
          <p>Revisa tu correo electrónico para confirmar registro.</p>
        </div>
      `;
    return exitoMensaje;
  },
};
