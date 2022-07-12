export default () => {
  const viewRegisterPetsTemplate = ` 
 
  <div class = "divRegisterPets">
     <figure>
    <img src="./imagenes/dog.png" alt="logo">      
    </figure>
    <h3>Registra a tu mascota</h3>
   
    <form class = "divFormPets"  id="formRegisterPets>
            
        <div class = "divFormPets" >

            <div class="groupPets">
                <input id="idNameRegister" type="text" placeholder="Name" required>
            </div>

            <div class="groupPets">
                <select name="typePets" id="selectTypePets">
                    <option value="disable">Tipo</option>
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Otros</option>
                </select>
            </div>

            <div class="groupPets">
                <select name="genderPets" id="selectGenderPets">
                    <option value="disable">Género</option>
                    <option value="f">femenino</option>
                    <option value="m">masculino</option>
                </select>
            </div>

            <div class="groupPets">
                <input id="idDateRegisterPets" type="date" placeholder="Date" required>
            </div>

            <div class="groupPets">
                <textarea id="idTextareaRegPets" name="textareaRegPets" rows="4" cols="50">Cuéntamos sobre tu mascota:
                </textarea>
            </div>

            <div class="groupPets">
            <input type="file" id="file" accept="image/*">
            <br>
            <img id="img"/>
            </div>
        

            <div class="buttonsRegister">
                <button class="buttons" id="idButtonRegisterPets" type="submit">Registrar</button>

                <button class="buttons" id="idButtonRegisterPets">Omitir este paso</button>
            </div>

        </div> 
    </form>
</div>
 `;
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'divContainerRegisterPets');
  divElement.innerHTML = viewRegisterPetsTemplate;

  return divElement;
};
