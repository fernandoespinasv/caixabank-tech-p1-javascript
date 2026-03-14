// Ahora, vamos a hacer otra vez pruebas en el main para comprobar que hemos creado la clase
// correctamente

// Importamos la función loadBrawlers desde brawler.js
import { loadBrawlers } from "./brawler.js";

// Cargamos todos los brawlers como objetos de nuestra clase
const brawlers = await loadBrawlers();

// Primero, comprobamos otra vez el número de brawlers (debemos obtener 100 como antes)
console.log("Total de brawlers:", brawlers.length);

// Comprobamos que el primer brawler es un objeto de nuestra clase con los campos correctos
console.log("Primer brawler:", brawlers[0]); 
console.log("Nombre:", brawlers[0].name); // --> GLOWBERT
console.log("Rareza:", brawlers[0].rarity); // --> Mythic
console.log("Clase:", brawlers[0].clase); // --> Unknown
console.log("Star Powers:", brawlers[0].starPowers); // --> ['BIOTIC-ECOSYSTEM', 'PARASITISM']
console.log("Gadgets:", brawlers[0].gadgets); // --> ['SLIPPERY-SAVIOR', 'MORE-LUMENS']

// Todos estos datos coinciden con los que muestra la API. Además, obviamente, coinciden también con los del juego.
// Cabe mencionar que la API escogida no está completamente actualizada ya que por ejemplo, en este caso concreto,
// en la clase del brawler debería de aparecer "SUPPORT" (probablemente no aparezca en la API ya que este
// brawler fue añadido al juego hace alrededor de un mes)