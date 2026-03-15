// Vamos a generar ahora nuestro archivo index.html

// Importamos las distintas funciones creadas, además usaremos writeFile de Node.js

import { loadBrawlers } from "./brawler.js";
import { render } from "./render.js";
import { writeFile } from "fs/promises";

// Cargamos los brawlers
const brawlers = await loadBrawlers();

// Generamos el HTML
const html = render(brawlers);

// Creamos el archivo index.html en nuestro directorio
await writeFile("index.html", html);

