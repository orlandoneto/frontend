export const selectMatrizImagens = ({ categorias }) => {
  if (categorias !== undefined && Object.keys(categorias).length > 0) {
    let arrayImagens = [];
    arrayImagens[0] = categorias.slice(0, 3);
    arrayImagens[1] = categorias.slice(3, 6);
    arrayImagens[2] = categorias.slice(6, 9);
    return arrayImagens;
  } else return [];
};
