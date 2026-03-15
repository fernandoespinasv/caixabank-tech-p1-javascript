// El siguiente paso es visualizar una página sencilla que muestre únicamente la lista de brawlers

export const render = (brawlers) => {
  return `
<html>
  <head>
    <meta charset="UTF-8">
    <title>HTML de Brawl Stars v1</title>
  </head>
  <body>
    <h1>Lista de Brawlers</h1>
    ${brawlers.map(b => `
      <div>${b.name}</div>
    `).join("")} 
  </body>
</html>`;
};

// Hemos usado .join("") ya que .map devuelve un array y al acceder posteriormente al index,
// los distintos nombres de los Brawlers aparecerían en líneas separadas pero también con una coma.
// Al usar el .join("") le decimos a la función una los nombres pero sin ningún separador