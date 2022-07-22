export const modalRegistro = {

  correoInvalido: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
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

  contraseñaDebil: () => {
    const contraseñaError = `
    <div class= "smsModal modalError" >
      <div class= "modalMedio modalArriba center">
        <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
      </div>
      <div  class= "modalMedio modalAbajo">
        <p  class= "center">Tu contraseña debe tener 6 carcateres como mínimo</p>
      </div>    
    </div>
      `;
    return contraseñaError;
  },

  correoExistente: () => {
    const correoExistent = `
    <div class= "smsModal modalError">
      <div class= "modalMedio modalArriba center">
        <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
      </div>
      <div  class= "modalMedio modalAbajo">
        <p  class= "center">Ya tienes una cuenta</p>
      </div>    
    </div>
      `;
    return correoExistent;
  },

  exito: () => {
    const exitoMensaje = `
    <div class= "smsModal modalError" >
      <div class= "modalMedio modalArriba center">
        <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
      </div>
      <div  class= "modalMedio modalAbajo">
        <p  class= "center">Revisa tu correo electrónico para confirmar registro</p>
      </div>    
     </div>
      `;
    return exitoMensaje;
  },
};
