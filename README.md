# Generador de HTML en Javascript

Este proyecto consiste en hacer un programa en Javascript que **genera una página HTML a partir de los datos obtenidos de una API que devuelve datos en JSON**. La página principal (`index.html`) de nuestra HTML es una lista de elementos donde cada elemento tiene un link que direcciona a una página individual de este. 

En nuestro caso, como el tipo de datos es libre, hemos elegido tomar una API del videojuego de **Brawl Stars**. Brawl Stars es un videojuego móvil multijugador desarrollado por Supercell y lanzado en el año 2018. El elemento central del juego son los **brawlers**, que son los personajes jugables. Cada brawler tiene su propio estilo de combate, ataque principal, súper habilidad, gadgets y star powers. Están clasificados por **rareza** (desde Brawler Inicial hasta Legendario) y por **clase** (Luchador, Tanque, Asesino, Apoyo, etc.), lo que define su rol en el campo de batalla. Es por ello, que en la definición de la clase `Brawler`, hemos incluido todas estas características que los hace únicos.

Este proyecto usa [BrawlAPI](https://api.brawlapi.com) v1, una API gratuita y comunitaria de Brawl Stars. No requiere autenticación ni API key y además devuelve los datos en JSON. Cabe destacar también que este trabajo parte un fork del repositorio original de [@pauek](https://github.com/pauek/caixabank-tech-p1-javascript). Para poder llevarlo todo a cabo correctamente, decidimos estructurarlo en 6 commits:

1. **Prueba. Fetch a la API y primeros console.log** — primera conexión con la API de BrawlAPI y comprobación de los datos en consola.
2. **Clase Brawler y loadBrawlers** — creación de la clase `Brawler` con los campos más relevantes y de la función `loadBrawlers` que carga los datos desde la API.
3. **Primer HTML** — generación de un `index.html` sencillo con la lista de nombres de los brawlers.
4. **Segundo HTML** — generación de las páginas individuales para cada brawler con imagen, rareza, clase, descripción, star powers y gadgets.
5. **HTML final** — estilos CSS, ordenación alfabética y mejoras visuales.
6. **Imagen final del proyecto** — update con todos los archivos finales del proyecto.