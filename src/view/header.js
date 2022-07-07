export const contenidoHeader = () => {
  const headerMuro = `
        <div class="navHeaderIcons">
            <img src="#logo" class=titulo-header" alt="logo">
            <label>buscador</label>
            <img src="#inicio" id="imgHome" class=titulo-header" alt="logo">
            <img src="#amigos" id="imgFriends"class=titulo-header" alt="logo">
            <img src="#mascotas" id="imgPets"class=titulo-header" alt="logo">
            <ul class="desplegable">
                <li><a id="cerrar-sesion"><img src="imagenes/sign-out.png"><span>Cerrar Sesión</span></a></li>
            </ul>
            <div class="enlacePerfil">
                <a href="#/rutaPerfilUsuario"><img src="#foto del suaurio" class="imagenUsuario"></a>
                <p class="nombreUsuario"><a id="perfil" href="#/artperfil">Nombre Usuario</a></p>
            </div>
        </div>
                 
        `;
  return headerMuro;
};
