import { peliculas } from "../data/peliculas.js";

//En este modulo se desarrollará la barra de búsqueda
//Posibles resultados de búsqueda
export const SearchList = (peliculas, searchTerm = '') => {
    let movieName = [];
    for (const {titulo} of peliculas) {
        if (titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
            movieName.push(titulo);
        }
    }
    return movieName;
}

export const resultBox = document.querySelector(".results"); //Resultados de búsqueda
export const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
export const movieInfo = document.getElementById("movieInfo");


//Representa resultados de búsqueda
export const displayResults = function (result) { 
    const resultHTML = result.map(function (movieInfo) {return `<li onclick="selectInput('${movieInfo}')">${movieInfo}</li>`;});
    resultBox.innerHTML = '<ul>' + resultHTML.join ("") + '</ul>';
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function (e) {
    let result = [];
    const input = inputBox.value.toLowerCase();
    
    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }
    
    if (input.length) {
        result = SearchList(peliculas, '').filter ((movieInfo) => {return movieInfo.toLowerCase().includes(input);});
        
        displayResults(result);
    }
};

//FIXME
export const moviesInfo = (description) => {
    return peliculas.find((peliculas) => peliculas.description === description);
}

export function selectInput(item) {
    const selected = item.innerText;
    inputBox.value = selected;
    resultBox.innerHTML = "";

    if (moviesInfo[selected]) {
        movieInfo.textContent = `${moviesInfo[selected]}`;
        movieInfo.style.display = "block";
    } else {
        bookText.style.display = "none";
    }
}