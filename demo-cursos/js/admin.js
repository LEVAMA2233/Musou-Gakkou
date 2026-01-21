const cursosController = new CursosController();

const form = document.getElementById('nuevoCursoFormulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const curso = {
  titulo: document.getElementById('tituloCurso').value,
  descripcion: document.getElementById('descripcionCurso').value,
  precio: parseFloat(document.getElementById('precioCurso').value),
  horario: document.getElementById('horarioCurso').value,
  fechaInicio: document.getElementById('fechaInicioCurso').value,
  imagenUrl: document.getElementById('imagenCurso').value
};
cursosController.agregarCurso(curso);
  form.reset();
  alert('Curso agregado');
});

// Exportar cursos
document.getElementById('exportarCursos').addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(cursosController.exportarCursos());
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "cursos.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
});

// Importar cursos desde archivo JSON
document.getElementById('importarArchivo').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = JSON.parse(e.target.result);
      cursosController.importarCursos(json);
      document.getElementById('mensaje').innerText = 'Cursos importados correctamente.';
    } catch(err) {
      document.getElementById('mensaje').innerText = 'Error al importar JSON';
    }
  };
  reader.readAsText(file);
});
