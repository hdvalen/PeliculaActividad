import { peliculas } from "../data/peliculas.js";

// Función para buscar películas
export const SearchList = (peliculas, searchTerm = '') => {
    return peliculas.filter(({ titulo }) =>
        titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Elementos del DOM
export const resultBox = document.querySelector(".results"); // Resultados de búsqueda
export const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
export const movieInfoModal = document.getElementById("movieInfoModal"); // Modal de información
export const movieDetails = document.getElementById("movieDetails"); // Detalles de la película

// Representar resultados de búsqueda
export const displayResults = (results) => {
    resultBox.innerHTML = `
        <ul>
            ${results
                .map(({ titulo }) => `<li class="result-item" data-title="${titulo}">${titulo}</li>`)
                .join("")}
        </ul>`;
    
    // Agregar evento de clic a cada elemento de la lista
    document.querySelectorAll('.result-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const titulo = event.target.getAttribute('data-title');
            showMovieDetails(titulo);
        });
    });
};

// Detecta la pulsación sobre la barra de búsqueda
inputBox.addEventListener('keyup', () => {
    const input = inputBox.value.trim().toLowerCase();

    if (!input) {
        resultBox.innerHTML = "";
        return;
    }

    const results = SearchList(peliculas, input);
    displayResults(results);
});

// Mostrar información de una película en el modal

export const showMovieDetails = (titulo)  => {
    const movie = peliculas.find((pelicula) => pelicula.titulo.toLowerCase() === titulo.toLowerCase());

    if (movie) {
        console.log("Se hizo clic en:", movie.titulo);
        console.log("Información de la película:", movie);

        movieDetails.innerHTML = `
            <div class="movie-details">
                <div>
                <img src="${movie.image}" alt="${movie.titulo}" class="movie-image">
                </div>
                <div class="movie-info">
                    <h3>${movie.titulo}</h3>
                    <p><strong>Descripción:</strong> ${movie.descripcion}</p>
                </div>
     
                <div class="card-footer text-center">
                    <button class="btn1" data-bs-toggle="modal" data-bs-target="#movieModal" 
                        onclick="fillModal('${movie.titulo}', '${movie.reparto.join(", ")}', '${movie.duracion}', '${movie.genero}', '${movie.fechaLanzamiento}')">
                        Ver mas
                    </button>
                </div>
            </div>
        `;
        movieInfoModal.style.display = "flex";

       

        // Cerrar el modal
        const closeModal = () => {
            movieInfoModal.style.display = "none";
        };
        document.querySelector(".close").onclick = closeModal;
        movieInfoModal.onclick = (e) => {
            if (e.target === movieInfoModal) closeModal();
         };
    }
};
window.fillModal = (titulo, reparto, duracion, genero, fechaLanzamiento) => {
    const modalTitle = document.getElementById('movieModalLabel');
    const modalBody = document.querySelector('.modal-body');

    modalTitle.textContent = titulo;
    modalBody.innerHTML = `

        <p><strong>Reparto:</strong> ${reparto}</p>
        <p><strong>Duración:</strong> ${duracion}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${fechaLanzamiento}</p>
        
    `;
};
