class CursosController {
    constructor() {
        const almacenado = localStorage.getItem('cursos');
        this.cursos = almacenado ? JSON.parse(almacenado) : [];
    }

    agregarCurso({titulo, descripcion, precio, horario, fechaInicio, imagenUrl}) {
        const id = Date.now();
        const curso = {id, titulo, descripcion, precio, horario, fechaInicio, imagenUrl};
        this.cursos.push(curso);
        this.guardar();
    }

    guardar() {
        localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }

    obtenerTodos() {
        return this.cursos;
    }

    importarCursos(arregloJson) {
        this.cursos = arregloJson;
        this.guardar();
    }

    exportarCursos() {
        return JSON.stringify(this.cursos, null, 2);
    }
}
