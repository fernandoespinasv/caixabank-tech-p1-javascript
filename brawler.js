// Ahora que ya hemos visto que podemos conectarnos correctamente a la API,
// vamos a crear la clase "Brawler" con los campos más relevantes.
// Para ello, usamos "constructor"
export class Brawler {
  
  constructor(data) {
    this.id = data.id;                        // ID único del brawler
    this.name = data.name;                    // Nombre
    this.description = data.description;      // Descripción
    this.imageUrl = data.imageUrl;            // Imagen principal
    this.rarity = data.rarity.name;           // Nombre de la rareza
    this.clase = data.class.name;             // Clase del brawler (Fighter, Tank...)
    this.starPowers = data.starPowers.map(sp => sp.name);  // Nombres de star powers (array)
    this.gadgets = data.gadgets.map(g => g.name);          // Nombres de gadgets (array)
  }
}

// Ahora, llamamos a la API (añadimos export para importar posteriormente en el main)

export const loadBrawlers = async () => {

  const response = await fetch("https://api.brawlapi.com/v1/brawlers");
  
  // Convertimos la respuesta a JSON
  const data = await response.json();
  
  // Convertimos cada elemento del array en un objeto de nuestra clase Brawler
  const brawlers = data.list.map(b => new Brawler(b));
  
  return brawlers;
};