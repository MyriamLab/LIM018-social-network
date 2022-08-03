export const registerPets = () => {
  const viewRegisterPetsTemplate = ` 
 
<div class = "divRegisterPets">    
    <h3>Registra a tu mascota</h3>   
    <form class = "divFormPets"  id="formRegisterPets>            
        <div class = "divFormPets" >
            <div class="groupPets">
                <input id="idNameRegister" type="text" placeholder="Name" required>
            </div>
            <div class="groupPets">
                <textarea id="idTextareaRegPets" name="textareaRegPets" rows="4" cols="50">Cuéntamos sobre tu mascota:
                </textarea>
            </div>
            <div class="groupPets">
                <input type="file" id="file">       
                <img id="img"/>
            </div>
            <div class="buttonsRegister">
                <button class="buttons" id="idButtonRegisterPets" type="submit">Registrar</button>
                <button class="buttons" id="regCancel">Cancelar</button>
            </div>
        </div> 
    </form>
</div>
 `;

  return viewRegisterPetsTemplate;
};
