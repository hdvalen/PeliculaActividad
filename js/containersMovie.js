export const movieCards = (peliculas) => {
    const contMovie = document.getElementById('contMovie');

    for (const { titulo, descripcion, image } of peliculas) {
        const divItems = document.createElement('div');
        divItems.classList.add('col'); // Cada tarjeta ocupa una columna
        divItems.innerHTML = `
            <div class="card">
                <h1 class="movie__title">${titulo}</h1>
                <img class="img-fluid" src="${image}" alt="Imagen de la película ${titulo}">
                <p class="movie__description">${descripcion}</p>
                <div class="text-center">
                    <button id="btnSeeMore" class="btn btn-danger" onclick="showPopup('${titulo}')">See More</button>
                </div>
            </div>
        `;
        contMovie.appendChild(divItems);
    }
};
