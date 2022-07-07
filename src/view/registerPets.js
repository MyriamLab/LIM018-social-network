export default () => {
  const viewRegisterPetsTemplate = ` 
    
  <div class = "divRegisterPets>
    <h3>Registra a tu mascota</h3>

        <form class = "divFormPets"  id="formRegisterPets>
            
            <div class = "divFormPets">
                <input id="idNameRegister" type="text" placeholder="Name" required>

                <select name="typePets" id="selectTypePets">
                    <option value="disable">Tipo</option>
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Otros</option>
                </select>

                <select name="genderPets" id="selectGenderPets">
                    <option value="disable">Género</option>
                    <option value="f">femenino</option>
                    <option value="m">masculino</option>
                </select>

                <input id="idDateRegisterPets" type="date" placeholder="Date" required>
                <textarea id="idTextareaRegPets" name="textareaRegPets" rows="4" cols="50">
                </textarea>
            </div>

            <div class = "divImgPets">
              
                <label class="label-Img" data-tittle="add photo"> 
                    ::before
                    <span class="file-name" data-tittle="No file...">
                        <i class="icon-pet-dog">
                        ::before
                        </i>
                    </span>
                    ::after
                </label>

                <button class="buttons id="idButtonRegisterPets" type="submit">Registrarse</button>
            </div>
        </form>
    </div>
 `;
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'divContainerRegisterPets');
  divElement.innerHTML = viewRegisterPetsTemplate;

  return divElement;
};
