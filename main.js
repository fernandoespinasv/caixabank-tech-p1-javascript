// Volvemos a generar nuestros HTML

import { loadBrawlers } from "./brawler.js";
import { render, renderBrawler } from "./render.js";
import { writeFile } from "fs/promises";

// Cargamos los brawlers 
const brawlers = await loadBrawlers();

// Adicionalmente, vamos a ordenar los brawlers alfabéticamente por nombre
brawlers.sort((a, b) => a.name.localeCompare(b.name));

// Generamos primero el index
const html = render(brawlers);
await writeFile("index.html", html);


// Generamos ahora el HTML para cada brawler (los guardamos en la carpeta "brawlers" que hemos creado)
for (const b of brawlers) {
  const html = renderBrawler(b);
  await writeFile(`brawlers/${b.name.toLowerCase()}.html`, html);
}

