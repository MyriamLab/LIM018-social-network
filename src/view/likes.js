export const countLike = (idButtonLike) => {
  let contador = 0;
  const contarLike = document.getElementById('countLike');
  contarLike.addEventListener('click', () => {
    contador++;
  });
  return contador;
};
