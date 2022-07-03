export default () =>{
    const viewLoginTemplate = `        
        <form>
            <input id="idEmailLogin" type="email">
            <input id="idPasswordLogin" type="password">
            <button id="idButtonLogin" type="submit">Ingresar</button>
        </form>       
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLoginTemplate;
  return divElement;
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