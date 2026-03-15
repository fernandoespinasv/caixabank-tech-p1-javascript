// Ahora que ya hemos conseguido una página sencilla y hemos visto que funciona correctamente, lo siguiente
// es, además de mantener el index con la lista de los brawlers, crear una página individual para cada uno
// con los campos de su clase. Haremos también que se pueda acceder a cada página simplemente pinchando en el nombre
// del index. Es por ello, que necesitaremos dos funciones: una para el index, y otra para crear cada una de las 
// páginas individuales. Cada uno de los HTML, los guardaremos en una carpeta que vamos a llamar "brawlers"

// Primero, vamos a modificar un poco la función "render" para que al pinchar en los nombres,
// nos lleve directamente al HTML correspondiente. Nótese que también vamos a poner todos
// los HTML en minúsculas (esto es "por convenio")

export const render = (brawlers) => {
  return `
<html>
  <head>
    <meta charset="UTF-8">
    <title>HTML de Brawl Stars v2</title>
  </head>
  <body>
    <h1>Brawlers</h1>
    ${brawlers.map(b => `
      <div>
        <a href="brawlers/${b.name.toLowerCase()}.html">${b.name}</a>
      </div>
    `).join("")}
  </body>
</html>`;
};

// A continuación, creamos la función que genera los HTML individuales con todos los campos
// de la clase Brawler (el ID finalmente no lo usaremos, pero nos pareció interesante añadirlo a la clase
// por si pudiese ser útil en algún momento)

export const renderBrawler = (b) => {
  return `
<html>
  <head>
    <meta charset="UTF-8">
    <title>${b.name}</title>
  </head>
  <body>
    <a href="../index.html">RETURN</a>
    <h1>${b.name}</h1>
    <img src="${b.imageUrl}" alt="${b.name}" />
    <p><strong>Rareza:</strong> ${b.rarity}</p>
    <p><strong>Clase:</strong> ${b.clase}</p>
    <p>${b.description}</p>
    <h2>Star Powers</h2>
    <ul>
      ${b.starPowers.map(sp => `<li>${sp}</li>`).join("")}
    </ul>
    <h2>Gadgets</h2>
    <ul>
      ${b.gadgets.map(g => `<li>${g}</li>`).join("")}
    </ul>
  </body>
</html>`;
};