/* const carrito = new CarritoController();
const lista = document.getElementById('listaCarrito');
const total = document.getElementById('total'); */
  //const total = document.getElementById('total');

//Ejemplo de un producto en JSON para referencia
 /* {
    "id": 1768868706812,
    "tipo": "Curso",
    "titulo": "N5 Principiante",
    "descripcion": "Conoces los kanjis",
    "precio": 2000,
    "horario": "Sabatino",
    "fechaInicio": "2026-01-23",
    "imagenUrl": "https://i.ibb.co/dwbsg2Sp/N5curso.jpg",
    "imagenUrl": "/assets/img/img-cursos/n5.jpeg",
    "calificacion" : "5"
  }*/
function init(){ // Función init se ejecuta cuando a cargado el resto del HTML
  const datosGuardados = localStorage.getItem('miCarrito'); //Cargamos el carrito de Local Storage para renderizarlo
  console.log(datosGuardados);
  const productos = JSON.parse(datosGuardados) || []; // Si no hay nada, devuelve un vector vacío.
  const contenedorProductos = document.getElementById("contenedor-productos"); //Obtenemos la referencia del contenedor
  const contenedorResumen = document.getElementById("contenedor-desglose");
  console.log(productos)
  //Inicializamos variables de contenido y precio
  let contenidoProductos = ""; // El HTML del contenido inicia vacío
  let contenidoResumen = "";
  let precioFinal = 0;
  if(productos.length){
    productos.forEach((producto, index) => {
      contenidoProductos += `
      <div class="card tarjeta-interna">
        <div class="card-body">
          <button type="button" onclick="eliminarProducto(${index})" class="btn-close position-absolute top-0 end-0 m-2" style="font-size: 1vmax" aria-label="Close"></button>
          <div class="row align-items-center">
            <div class="col-4">
              <img src="${producto.imagenUrl}" alt="${producto.titulo}" class="img-fluid img-producto">
            </div>
            <div class="col-4 contenedor-nombre fw-bold">
              ${producto.titulo}
            </div>
            <div class="col-4 contenedor-precio fw-bold">
              $${producto.precio}.00 MXN
            </div> 
          </div>
        </div>
      </div>`
      contenidoResumen += `      
        <div class="d-flex justify-content-between mb-2">
          <span class="text-secondary">${producto.titulo}</span>
          <span>$${producto.precio}.00 MXN</span>
        </div>`
      precioFinal += producto.precio
    });
      contenidoResumen += `
        <div class="d-flex justify-content-between border-top pt-3 mt-2">
          <span class="fw-bold">Total</span>
          <span class="fw-bold">$${precioFinal}.00 MXN</span>
        </div>
        <div class="d-flex gap-2 mb-4">
          <input type="text" class="form-control border-0 bg-light rounded-pill px-3 texto-descuento" placeholder="Código de promoción">
          <button class="btn btn-secondary rounded-pill px-4 opacity-50 boton-descuento" type="button">Aplicar</button>
        </div>
        <div class="d-flex flex-wrap justify-content-center align-items-center payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex">
          <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Mercado_Pago.svg" alt="Mercado Pago" style="height: calc(3vmin * 1.5);"> -->
        </div>
        <button class="btn btn-continuar">
          Continuar compra
        </button>`
}else{
    contenidoProductos = `<h6 class="fw-bold">Carrito vacío</h6><p class="conceptos">Ups! Por favor agrega un producto al carrito para comprar.</p>
    <p class="conceptos">Para ayudarte a comenzar, puedes revisar los cursos en la barra de navegación, ¡Tenemos cursos para todos los niveles!</p>
    <p class="conceptos">Si agregaste productos en otra sesión, es posible que estos ya se encuentren en tu cuenta.</p>`
    console.log("carrito vacío");
    contenidoResumen = `
      <div class="card border-0 shadow-sm p-4 text-center bg-light">
        <div class="card-body">
          <h5 class="fw-bold mb-3">Parece que aún no has añadido nada</h5>
          <p class="text-secondary small mb-4">
            Explora nuestro catálogo y descubre cursos diseñados por expertos para impulsar tu aprendizajes. 
            ¡Tu próximo gran logro comienza con un solo clic!
          </p>
          
          <a href="./pages/cursos.html" class="btn btn-dark w-100 rounded-pill py-2 fw-bold shadow-sm">
            Ir a cursos
          </a>
          
          <div class="mt-4 pt-3 border-top">
            <p class="text-muted mb-1 small">¿Necesitas ayuda?</p>
            <a href="./pages/contacto.html" class="text-decoration-none small text-primary">Formulario</a>
          </div>
        </div>
      </div>`
;
  }
  contenedorProductos.innerHTML = contenidoProductos;
  contenedorResumen.innerHTML = contenidoResumen;
  }

  document.addEventListener('DOMContentLoaded',init);

  function eliminarProducto(index){
    // 1. Lanzamos la alerta de confirmación
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este producto de tu carrito?");

    // 2. Si el usuario acepta (true), procedemos
    if (confirmacion) {
        const datosGuardados = localStorage.getItem('miCarrito');
        let productos = JSON.parse(datosGuardados) || [];

        // Eliminamos el elemento
        productos.splice(index, 1);

        // Actualizamos LocalStorage
        localStorage.setItem('miCarrito', JSON.stringify(productos));

        // Refrescamos la interfaz
        init();
        
        console.log("Producto eliminado correctamente");
    } else {
        // Si cancela, no pasa nada
        console.log("Acción cancelada por el usuario");
    }
}