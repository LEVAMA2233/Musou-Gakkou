const controladorCursosPublicos = new CursosController();
const contenedor = document.getElementById('contenedorCursos');

controladorCursosPublicos.obtenerTodos().forEach(curso => {
    // Creamos el contenedor principal para cada curso, ahora es un artículo
    console.log(curso);
    const articulo = document.createElement('article');
    articulo.className = 'col-md-4 mb-4';

    // Agregamos la estructura semántica dentro del artículo
    articulo.innerHTML = `
        <div class="card h-100">
            <img src="${curso.imagenUrl}" class="card-img-top" alt="${curso.titulo}">
            <section class="card-body">
                <header>
                    <h5 class="card-title">${curso.titulo}</h5>
                </header>
                <p class="card-text">${curso.descripcion}</p>
                <footer>
                    <p class="text-muted">Precio: $${curso.precio}</p>
                    <p class="text-muted">Horario: ${curso.horario}</p>
                    <p class="text-muted">Inicia: ${curso.fechaInicio}</p>
                </footer>
            </section>
        </div>
    `;

    // Agregamos el artículo al contenedor
    contenedor.appendChild(articulo);
});
