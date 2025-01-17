export const movieCards = (peliculas) => {
    const contMovie = document.getElementById('contMovie');

    for (const { titulo, descripcion, image, reparto, duracion, genero, fechaLanzamiento } of peliculas) {
        const divItems = document.createElement('div');
        divItems.classList.add('col-12', 'col-md-4', 'col-lg-3');

        divItems.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top img-fluid" src="${image}" alt="Imagen de la película ${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${descripcion}</p>
                </div>
                <div class="card-footer text-center">
                    <button class="btn" data-bs-toggle="modal" data-bs-target="#movieModal" 
                        onclick="fillModal('${titulo}', '${reparto}', '${duracion}', '${genero}', '${fechaLanzamiento}')">
                        Ver mas
                    </button>
                </div>
            </div>
        `;
        contMovie.appendChild(divItems);
    }
};
 //modal Ver mas
window.fillModal = (titulo, reparto, duracion, genero, fechaLanzamiento) => {
    const modalTitle = document.getElementById('movieModalLabel');
    const modalBody = document.querySelector('.modal-body');

    modalTitle.textContent = titulo;
    modalBody.innerHTML = `

        <p><strong>Reparto:</strong> ${reparto}</p>
        <p><strong>Duración:</strong> ${duracion} minutos</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${fechaLanzamiento}</p>
        
    `;
};
