//JSON improvisado para pruebas
let cursos =  [
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
]
document.addEventListener('DOMContentLoaded', () => {
const contenedor = document.getElementById("contenedor-cursos"); // Id del contenedor del cursos
const inputBusqueda = document.getElementById('input-busqueda'); // Para llamar el contenido de la barra de búsqueda
const botonLupa = document.getElementById('boton-lupa'); //Para detectar cuando el usuario de clic en la lupa "buscar"

//Revisar como llamar el JSON externo
/*async function traerCursos() {
  const requestURL =
    "/assets/json/cursos.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  let cursos = await response.json();
}*/


//console.log(cursos.items);
//cursos = cursos.items;

/*function ejecutarBusqueda() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    console.log(textoBusqueda);
}
botonLupa.addEventListener('click', ejecutarBusqueda);*/

//Reordena los objetos según la condicion especificada

document.querySelectorAll('.btn-check').forEach(input => {
  let contenido="";
  input.addEventListener('change', (e) => {

    console.log("Opción seleccionada:", e.target.id);
    // Aquí puedes disparar tu función de filtrado
    switch(e.target.id){
      case "option1":  //Mejor valorados
        cursos.sort((a, b) => b.stars - a.stars);
        contenido= generarHTML(cursos);
        //console.log(cursos);
        break;
      case "option2": //Menor precio
        cursos.sort((a, b) => a.cost - b.cost);
        contenido = generarHTML(cursos);
        //console.log(cursos);
        break;
      case "option3": //Mayor precio
      cursos.sort((a, b) => b.cost - a.cost);
      contenido = generarHTML(cursos);
      //console.log(cursos)
        break;
      default:
    }
        contenedor.innerHTML = contenido;
//console.log(contenido);
});
});

// --- Lógica de Búsqueda ---
    botonLupa.addEventListener('click', () => {
        let contenido = "";
        const texto = inputBusqueda.value.toLowerCase().trim();
        const filtrados = cursos.filter(c => c.name.toLowerCase().includes(texto));
        if (filtrados.length == 0){
          contenido = `
            <div class="col-12 text-center mt-5">
                <div class="alert alert-light" role="alert">
                    <h4 class="alert-heading">¡Ups! No hay resultados</h4>
                    <p>No encontramos ningún curso que coincida con "<strong>${inputBusqueda.value}</strong>".</p>
                    <hr>
                    <p class="mb-0">Prueba con otro término o revisa la ortografía.</p>
                </div>
            </div>`;
        }
        else{
        contenido = generarHTML(filtrados);
        }
        contenedor.innerHTML = contenido;
    });

});



    function generarHTML(lista){
    let contenido = "";
    //Reescribe el HTML con el contenido reordenado
    lista.forEach( curso =>{
      contenido = contenido + `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card tarjeta-curso" id=${curso.name}>								
          <img src=${curso.imgRoute} class="card-img-top imagen-curso" alt=${curso.name}>
          <div class="card-body">
            <h5 class="card-title">${curso.name}</h5>
            <p class="card-text fw-bold">$${curso.cost}</p>`;
          for(let j = 1;j<=curso.stars;j++){
            contenido = contenido + `<span class="fa fa-star checked"></span>`;
          }
          for(let j = curso.stars;j<5;j++){
            contenido = contenido + `<span class="fa fa-star"></span>`;
          }
          contenido = contenido +`</div>
      </div>
    </div>`;
        });
    return contenido;

}