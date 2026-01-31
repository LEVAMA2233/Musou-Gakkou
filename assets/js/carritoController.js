class CarritoController {
  constructor() {
    const guardado = localStorage.getItem('carrito');
    this.carrito = guardado ? JSON.parse(guardado) : [];
  }

  agregarProducto(producto) {
    const existente = this.carrito.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad++;
    } else {
      this.carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
      });
    }
    this.guardar();
  }

  eliminarProducto(id) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.guardar();
  }

  cambiarCantidad(id, cantidad) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto && cantidad > 0) {
      producto.cantidad = cantidad;
      this.guardar();
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  obtenerTotal() {
    return this.carrito.reduce((total, p) => total + p.precio * 1, 0);
  }

  vaciar() {
    this.carrito = [];
    this.guardar();
  }

  guardar() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}