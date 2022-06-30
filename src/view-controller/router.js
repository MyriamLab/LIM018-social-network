import { components } from '../view/index.js';


const changeView = (route) =>{
    const container = document.getElementById("container");
    container.innerHTML=" ";
    switch (route) {
        case '#/login':
            {
                return container.appendChild(components.login())
            }
        case '#/register':
            {
                return container.appendChild(components.register())
            }           
        
    
        default:
            break;
    }
    console.log(route);

}
export {changeView}