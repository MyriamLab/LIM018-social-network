export default () =>{
    const viewRegisterTemplate = `
   
        <form>
            <input type="text">NOMBRE
            <input type="text">APELLIDO
            <input type="email">EMAIL
            <input type="date">FECHA DE NACIMIENTO
            <input type="radio">SEXO
            <input type="password">CONTRASEÑA
            <button type="submit">Ingresar</button>
        </form> 
      
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewRegisterTemplate;

  return divElement;

}