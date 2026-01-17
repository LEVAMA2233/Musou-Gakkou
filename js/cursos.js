document.querySelectorAll('.btn-check').forEach(input => {
  input.addEventListener('change', (e) => {
    console.log("Opción seleccionada:", e.target.id);
    // Aquí puedes disparar tu función de filtrado
  });
});