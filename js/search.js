import { peliculas } from "../data/peliculas.js";

// Función para buscar películas
export const SearchList = (peliculas, searchTerm = '') => {
    return peliculas.filter(({ titulo }) =>
        titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Mostrar resultados de búsqueda
export const displayResults = (results) => {
    const resultBox = document.querySelector(".results");
    const resultHTML = results
        .map((movie) => `<li data-title="${movie.titulo}">${movie.titulo}</li>`)
        .join('');
    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
    attachClickEvent(); // Agregar evento a cada resultado
};

// Mostrar información de la película en un modal
export const showMovieDetails = (movie) => {
    const modal = document.getElementById("movieInfoModal");
    const modalContent = document.getElementById("movieDetails");
    modalContent.innerHTML = `
        <h3>${movie.titulo}</h3>
        <p><strong>Descripción:</strong> ${movie.descripcion}</p>
        <p><strong>Reparto:</strong> ${movie.reparto.join(", ")}</p>
        <p><strong>Duración:</strong> ${movie.duracion}</p>
        <p><strong>Género:</strong> ${movie.genero}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${movie.fechaLanzamiento}</p>
    `;
    modal.style.display = "flex";

    // Cerrar el modal al hacer clic en la "x" o fuera del contenido
    const closeModal = () => {
        modal.style.display = "none";
    };

    document.querySelector(".close").onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
};

// Agregar evento a cada resultado
const attachClickEvent = () => {
    const results = document.querySelectorAll(".results li");
    results.forEach((item) => {
        item.addEventListener("click", (e) => {
            const movieTitle = e.target.getAttribute("data-title");
            const selectedMovie = peliculas.find((movie) => movie.titulo === movieTitle);
            if (selectedMovie) showMovieDetails(selectedMovie);
        });
    });
};

// Lógica de búsqueda
const inputBox = document.querySelector(".search-bar");
inputBox.onkeyup = function () {
    const searchTerm = inputBox.value.trim();
    if (searchTerm === '') {
        document.querySelector(".results").innerHTML = '';
        return;
    }
    const results = SearchList(peliculas, searchTerm);
    displayResults(results);
};
