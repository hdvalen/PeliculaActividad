import { peliculas } from "../data/peliculas"; // Importa las películas

// Función que busca títulos de películas basados en un término de búsqueda
export const SearchList = (TermBusqueda = '') => {
    return peliculas // Usa directamente el array importado
        .filter(({ titulo }) => 
            titulo.toLowerCase().includes(TermBusqueda.toLowerCase())
        )
        .map(({ titulo }) => titulo);
};

// Elementos del DOM
export const resultBox = document.querySelector(".results"); // Resultados de búsqueda
export const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
export const movieInfo = document.getElementById("movieInfo"); // Información de la película seleccionada

// Función que representa los resultados de búsqueda como una lista de elementos 'li'
export const displayResults = function (result) { 
    // Crea una lista HTML a partir de los resultados, cada título de película se convierte en un 'li'
    const resultHTML = result.map(function (movieInfo) {
        return `<li onclick="selectInput('${movieInfo}')">${movieInfo}</li>`;
    });
    // Inserta los resultados en el contenedor de resultados
    resultBox.innerHTML = '<ul>' + resultHTML.join("") + '</ul>';
};

// Detecta la pulsación sobre la barra de búsqueda (evento 'keyup')
inputBox.onkeyup = function (e) {
    let result = [];
    // Convierte el texto del input a minúsculas para hacer la búsqueda insensible a mayúsculas
    const input = inputBox.value.toLowerCase();
    
    // Si el campo de entrada está vacío, borra los resultados
    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }
    
    // Filtra las películas usando la función SearchList
    result = SearchList(input); // Ahora pasa 'input' como argumento
    
    // Muestra los resultados filtrados
    displayResults(result);
};

// Función que busca y retorna la información de la película que tiene una descripción específica
export const moviesInfo = (description) => {
    return peliculas.find((pelicula) => pelicula.description === description); // Encuentra la película por descripción
}

// Función que maneja la selección de una película de la lista de resultados
export function selectInput(item) {
    const selected = item.innerText; // Obtiene el título de la película seleccionada
    inputBox.value = selected; // Rellena el campo de entrada con el título seleccionado
    resultBox.innerHTML = ""; // Limpia la lista de resultados

    // Si la película seleccionada tiene información asociada, muestra su descripción
    const movie = moviesInfo(selected); // Busca la película seleccionada
    if (movie) {
        movieInfo.textContent = `${movie.description}`; // Muestra la descripción de la película
        movieInfo.style.display = "block"; // Asegura que el texto de la descripción sea visible
    } else {
        movieInfo.style.display = "none"; // Si no hay información, oculta el texto
    }
}
