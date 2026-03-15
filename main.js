// Vamos ahora a generar todos estos archivos HTML

import { loadBrawlers } from "./brawler.js";
import { render, renderBrawler } from "./render.js";
import { writeFile } from "fs/promises";

// Cargamos los brawlers 
const brawlers = await loadBrawlers();

// Generamos primero el index
const html = render(brawlers);
await writeFile("index.html", html);

// Generamos ahora el HTML para cada brawler (los guardamos en la carpeta "brawlers" que hemos creado)
for (const b of brawlers) {
  const html = renderBrawler(b);
  await writeFile(`brawlers/${b.name.toLowerCase()}.html`, html);
}

// Nos hemos dado cuenta que algunas imágenes de los HTML individuales salen más grandes que otras.
// En la siguiente versión de nuestros HTML intentaremos mejorar esto
