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
        <p  class= "center">El E-mail ya ha sido registrado.</p>
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
  error: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">Ocurrió un error.</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },
};

export const modalLogin = {

  correoNoVerificado: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">Te hemos enviado un E-mail para validar tu correo. Verifícalo.</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },
  correoNoExistente: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">El usuario no esta registrado</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },
  passwordIncorrecto: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">La contraseña es inválida.</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },
  error: () => {
    const errorMensaje = `
        <div class= "smsModal modalError">
          <div class= "modalMedio modalArriba center">
            <i class="material-icons center" style="font-size:48px;color:#ffff">error</i>
          </div>
          <div  class= "modalMedio modalAbajo">
            <p  class= "center">Ocurrió un error.</p>
          </div>    
        </div>
      `;
    return errorMensaje;
  },

};
