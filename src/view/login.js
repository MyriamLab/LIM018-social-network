export default () =>{
    const viewLoginTemplate = `
   
        <form>
            <input type="text">
            <input type="password">
            <button type="submit">Ingresar</button>
        </form> 
      
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLoginTemplate;

  return divElement;

}