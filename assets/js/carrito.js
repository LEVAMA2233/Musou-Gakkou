const carrito = new CarritoController();
const lista = document.getElementById('listaCarrito');
const total = document.getElementById('total');

function render() {
  const datosGuardados = localStorage.getItem('miCarrito');
  console.log(datosGuardados);

//console.log(carritoRecuperado); // Output: [1, 2, 3]
  lista.innerHTML = '';
  const items = carrito.obtenerCarrito();

  if (items.length === 0) {
    lista.innerHTML = '<p>Tu carrito está vacío.</p>';
  }

  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card mb-3 p-3 carrito-item d-flex flex-column flex-md-row align-items-start gap-2';

    div.innerHTML = `
      <img  style="width:100px; "class="" src="${p.imagen || 'src/img/sin-imagen.png'}" alt="${p.nombre}">
      <div class="d-flex flex-column flex-md-row gap-1 align-items-start justify-content-between w-100">
        <h5>${p.nombre}</h5>
        <div class="info-item d-flex flex-md-column">
          <p>Precio unitario:</p>
          <span>$${p.precio}</span>
        </div>
        <div class="info-item d-flex flex-md-column">
          <p>Cantidad:</p>
          <input type="number" min="1" value="${p.cantidad}" style="width:60px">
        </div>
        <div class="info-item d-flex flex-md-column">
          <p>Subtotal:</p>
          <span>$${(p.precio * p.cantidad).toFixed(2)}</span>
        </div>
        <button class="btn btn-danger">x</button>
      </div>
    `;

    div.querySelector('input').addEventListener('change', e => {
      const cantidad = Number(e.target.value);
      if (cantidad > 0) {
        carrito.cambiarCantidad(p.id, cantidad);
        render();
      }
    });

    div.querySelector('button').addEventListener('click', () => {
      carrito.eliminarProducto(p.id);
      render();
    });

    lista.appendChild(div);
  });

  total.textContent = carrito.obtenerTotal().toFixed(2);
}

render();

// Manejo del botón Finalizar Compra
document.getElementById('comprar').addEventListener('click', () => {
    if (carrito.obtenerCarrito().length === 0) {
        // Alerta de error si el carrito está vacío
        Swal.fire({
            icon: 'error',
            title: '¡Carrito vacío!',
            text: 'Debes agregar al menos un producto para finalizar la compra.',
            confirmButtonColor: '#ef4444' // Rojo
        });
        return;
    }

    // Alerta de éxito al finalizar la compra
    Swal.fire({
        title: '¡Confirmar Pedido!',
        text: "¿Estás listo para finalizar tu compra en JESA Sports?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#10b981', // Verde JESA
        cancelButtonColor: '#6b7280', // Gris
        confirmButtonText: 'Sí, comprar ahora',
        cancelButtonText: 'Seguir mirando'
    }).then((result) => {
        if (result.isConfirmed) {
            // Animación de carga procesando el "pago"
            Swal.fire({
                title: 'Procesando...',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then(() => {
                // Éxito final
                Swal.fire({
                    icon: 'success',
                    title: '¡Gracias por tu compra!',
                    text: 'Tu pedido ha sido procesado con éxito.',
                    confirmButtonColor: '#10b981'
                });
                carrito.vaciar();
                render();
            });
        }
    });
});