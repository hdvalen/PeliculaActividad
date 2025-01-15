import { peliculas } from "./data/peliculas.js";
import {  } from "./js/search.js";


 const peliName = (id) => {
    return peliculas.find((movie) => movie.id === id);
}
const {titulo} = peliName(1);
console.log(titulo);  

console.log(peliculas.titulo);