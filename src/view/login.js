
export default () =>{
    const viewLoginTemplate = `        
        <form>
        <div class ="divImgLogin">
        <img src ="">
        </div>

        <div class="divFormLogin"> 
        <figure>
        <img scr="./imagenes/chamander.png" alt="imagen" height="250px">
        </figure>
        <h3>LOGIN</h3>
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

            <button id="idButtonLogin" type="submit">Ingresar</button>
        </form>       

            </div>

            <div class="buttonClass">
            <button class="buttons" id="idButtonLogin" type="submit">Inciar sesión</button>
            </div>
        </form> 
        </div>

      

  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLoginTemplate;
  divElement.setAttribute('class', 'divForm');
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
