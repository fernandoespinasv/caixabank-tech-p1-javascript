// Ahora que ya hemos creado nuestro archivo CSS, ajustamos nuestras funciones

export const render = (brawlers) => {
  return `
<html>
  <head>
    <meta charset="UTF-8">
    <title>Brawl Stars - Brawlers</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Brawlers 2026</h1>
    <div class="brawlers-grid">
      ${brawlers.map(b => `
        <div class="brawler-card">
          <img src="${b.imageUrl}" alt="${b.name}" />
          <a href="brawlers/${b.name.toLowerCase()}.html">${b.name}</a>
        </div>
      `).join("")}
    </div>
  </body>
</html>`;
};



export const renderBrawler = (b) => {
  return `
<html>
  <head>
    <meta charset="UTF-8">
    <title>${b.name}</title>
    <link rel="stylesheet" href="../style.css">
  </head>
  <body>
    <a class="back-link" href="../index.html">←</a>
    <div class="brawler-detail">
      <img src="${b.imageUrl}" alt="${b.name}" />
      <h1>${b.name}</h1>
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
    </div>
  </body>
</html>`;
};