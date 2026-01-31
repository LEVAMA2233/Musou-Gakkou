import { getProducts } from './productController.js'; //Para llamar a la data del JSON que ya se recolectó

//JSON improvisado para pruebas
/* let cursos =  [
    {
        "id": "1",
        "name": "Curso N5",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/n5.jpeg",
        "cost": "4000",
        "stars": "4.5"
    },
    {
        "id": "2",
        "name": "Curso N4",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/n4.jpeg",
        "cost": "4500",
        "stars": "4"
    },
    {
        "id": "3",
        "name": "Curso N3",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/n3.jpeg",
        "cost": "5000",
        "stars": "3"
    },
    {
        "id": "4",
        "name": "Curso N2",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/n2.jpeg",
        "cost": "5500",
        "stars": "5"
    },
    {
        "id": "5",
        "name": "Curso N1",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/n1.jpeg",
        "cost": "6000",
        "stars": "2"
    },
    {
        "id": "6",
        "name": "Clase personalizada",
        "description": "Curso",
        "imgRoute": "/assets/img/img-cursos/clase-personalizada.jpeg",
        "cost": "500",
        "stars": "1"
    }
] */
// Funcion asíncrona para cargar info del JSON
/* async function loadData() {
    try {
        const response = await fetch('/assets/json/cursos.json'); // Ubicación del JSON
        if (!response.ok) throw new Error('Network response was not ok'); // Si por alguna razón falla
        const data = await response.json(); //Esperar la respuesta
        return data;  //Envia la información para trabajar con ella
    } catch (error) {
        console.error('There was a problem fetching the JSON:', error);//Mensaje de error
    }
} */

// Debemos esperar a que se reciba la información para después trabajar con ella
async function init() {
    const productos = await getProducts(); // Esperamos la info
    // console.log(productos); //Imprime para debug
    if (!productos) return; // Si no carga la info, no hace nada
    let cursos = productos.filter(item => item.tipo === "Curso"); // Separamos los cursos de los recursos

    const contenedor = document.getElementById("contenedor-cursos"); // Referencia del contenedor para manipular HTML
    const inputBusqueda = document.getElementById('input-busqueda'); // Referencia del buscador para filtrar input del usuario
    const botonLupa = document.getElementById('boton-lupa'); // Referencia del botón buscar para cuando el usuario hace clic

    //Display de los contenidos sin filtrar
    contenedor.innerHTML = generarHTML(cursos);

    // Filtrado 
    document.querySelectorAll('.btn-check').forEach(input => { // Filtrado por mejor valorado o mayor/menor precio
        input.addEventListener('change', (e) => {
            switch(e.target.id){
                case "option1": cursos.sort((a, b) => b.calificacion - a.calificacion); break; //Mejor valorados
                case "option2": cursos.sort((a, b) => a.precio - b.precio); break; //Mayor precio
                case "option3": cursos.sort((a, b) => b.precio - a.precio); break; //Menor precio
            }
            contenedor.innerHTML = generarHTML(cursos); //Llama a la función para desplegar contenido filtrado
        });
    });

    // Evento para cuando dan clic en buscar
    botonLupa.addEventListener('click', () => { 
        const texto = inputBusqueda.value.toLowerCase().trim();
        console.log(texto) //trim borra los espacios en blanco
        const filtrados = cursos.filter(curso => curso.titulo.toLowerCase().includes(texto) || curso.horario.toLowerCase().includes(texto)); //Filtra de acuerdo al input del usuario
        
        if (filtrados.length === 0) { //Desplegar mensaje en caso de que no haya ninguna respuesta compatible
            contenedor.innerHTML = `<div class="alert alert-light">Sin coincidencias para ${texto}</div>`; 
        } else {
            contenedor.innerHTML = generarHTML(filtrados); //Despliega las coincidencias encontradas
        }
    });
}

// Se asegura de que el js actúe DESPUES de haber cargado el HTML
document.addEventListener('DOMContentLoaded', init);
    function generarHTML(lista){ // Función para  generar y actualizar HTML según lo filtrado
    let contenido = ""; //Inicializamos variable 
    //Reescribe el HTML con el contenido reordenado
    lista.forEach( curso =>{ //for each para cada "tarjeta" o producto
      contenido += `
      
      <div class="col-12 col-sm-6 col-md-4 col-lg-3"> <!--Responsividad con Bootstrap-->
      <a href="./pages/detalleCurso.html?id=${curso.id}"> <!--Para que al hacer clic en el curso correspondiente mande a detalles del curso-->
        <div class="card tarjeta-curso" id=${curso.titulo}>	<!--Cada tarjeta tiene el id del curso para css o si se necesita acceder con js	-->						
          <img src=${curso.imagenUrl} class="card-img-top imagen-curso" alt=${curso.titulo}> <!-- Llama a la imagen correspondiente del curso-->
          <div class="card-body">
            <h5 class="card-title">${curso.titulo}</h5> <!--Mostramos el nombre del curso-->
            <p class="card-text"> Modalidad ${curso.horario}</p> <!--Despliega su modalidad (Intensivo o sabatino)-->
            <p class="card-text fw-bold">$${curso.precio}</p> <!--Precio del curso-->
            <p class="card-text">${curso.descripcion}</p>
            <i data-star="${curso.calificacion}"></i> 
        </div>
      </div>
      </a>
    </div>`;
        });
    return contenido; //devuelve todo el String de HTML relleno con los parámetros que van cambiando

}