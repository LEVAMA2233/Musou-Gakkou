import { getProducts } from './productController.js'; //Para llamar a la data del JSON que ya se recolectó

    

async function init() {
    const productos = await getProducts();
    const contenedorResenas = document.getElementById("contenedor-resenas")
    const resenasDetalladas = productos.flatMap(curso =>  //Separamos solamente las reseñas individuales y el curso al que hacen referencia
    curso.resenas.map(resena => ({
        ...resena,
        cursoTitulo: curso.titulo, // Guardamos el título del curso
        cursoId: curso.id         // Guardamos el ID por si acaso
    }))
   
);
contenedorResenas.innerHTML = generarHTML(resenasDetalladas);
 //console.log(resenasDetalladas)

 // Filtrado 
    document.querySelectorAll('.btn-check').forEach(input => { // Filtrado por mejor valorado o mayor/menor precio
        input.addEventListener('change', (e) => {
            switch(e.target.id){
                case "option1": resenasDetalladas.sort((a, b) => b.calificacion - a.calificacion);  break; //Mejores calificaciones
                case "option2": resenasDetalladas.sort((a, b) => new Date(a.fecha)- new Date(b.fecha));  break; //Mayor precio
            }
            contenedorResenas.innerHTML = generarHTML(resenasDetalladas); //Llama a la función para desplegar contenido filtrado
        });
    });

}


// Se asegura de que el js actúe DESPUES de haber cargado el HTML
document.addEventListener('DOMContentLoaded', init);

function generarHTML(resenas){
let i = 0;
let contenido = ""
while (i<6 && i<resenas.length){
contenido +=
`<div class="col-12 col-sm-6 col-md-4">
<div class="card">
  <div class="card-body">
    <i data-star="${resenas[i].calificacion}"></i> 
    <h5 class="card-title">${resenas[i].mensaje}</h5>
    <div class="row">
    <div class="col-3">
        <img class="perfil-miniatura" src="../assets/img/img-resenas/blank-profile-picture.webp">
    </div>
    <div class="col-9">
    <h6 class="card-subtitle mb-2 text-body-secondary">${resenas[i].autor}</h6>
    <p class="card-subtitle mb-2 text-body-secondary">${resenas[i].cursoTitulo}</p>
    </div>
    </div>
  </div>
</div>
</div>
`;
i++;}
return contenido;
}