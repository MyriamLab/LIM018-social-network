export default () => {
  const viewLoginTemplate = `
        <div class ="divImgLogin">
        <img src ="">
        </div>

    <div class="divFormLogin"> 

        <div class="form-container">
        <figure>
        <img scr="../imagenes/pawn.png" alt="imagen">
        </figure>

        <h3>Login</h3>

        <form class='formLogin'>
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
          <ul>
          <li><img src="" alt="ícono Facebook"></li>
          <li><img src="" alt="ícono Google"></li>
          </ul>
        </div> 
      </div> 
    </div>

      
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLoginTemplate;
  divElement.setAttribute("class", "divForm");

  return divElement;
};

/*

let buttonLogin = document.getElementById("idButtonLogin");
buttonLogin.addEventListener("submit",sendLogin)

function sendLogin(){

   let email=document.getElementById("idEmailLogin").value;
   let password=document.getElementById("idPasswordLogin").value;
   console.log(email, " ", password);
}
*/
