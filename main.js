// Antes de crear clases y generar HTML, lo primero es comprobar que
// podemos conectarnos correctamente a la API y que esta, devuelve datos correctos.
// Usaremos una API pública del videojuego de Brawl Stars (más detalles en el README).

const response = await fetch("https://api.brawlapi.com/v1/brawlers");

// Convertimos la respuesta a un objeto JavaScript usando .json()

const data = await response.json();

// Ahora, vamos a comprobar que los datos son correctos (leer README para entender comandos).


console.log("Total de brawlers:", data.list.length); // --> 100
console.log("Primer brawler", data.list[0].name);  // --> GLOWBERT


