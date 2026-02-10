//Guarda la informacion y la muestra
function guardarYContinuar(siguientePagina) {

    // Obtener todos los grupos de radios (por name)
    const preguntas = new Set();
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        preguntas.add(radio.name);
    });

    // Verificar que cada pregunta tenga una respuesta
    for (let pregunta of preguntas) {
        const contestada = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (!contestada) {
            alert("Contesta todas las preguntas antes de continuar");
            return;
        }
    }

    // Guardar respuestas
    preguntas.forEach(pregunta => {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        localStorage.setItem(pregunta, seleccionada.value);
    });

    // Avanzar
    window.location.href = siguientePagina;
}
//Resultado final

function calcularResultado() {
    let total = 0;

    for (let i = 1; i <= 58; i++) {
        const valor = localStorage.getItem(`p${i}`);
        if (valor !== null) {
            total += parseInt(valor, 10);
        }
    }

    let nivel = "";
    if (total <= 8) nivel = "Nivel N5";
    else if (total <= 17) nivel = "Nivel N4";
    else if (total <= 26) nivel = "Nivel N3";
    else if (total <= 35) nivel = "Nivel N2";
    else nivel = "Nivel N1";

    document.getElementById("resultado").innerHTML = `
        <h4>Puntaje: ${total} / 58</h4>
        <h3 class="text subrrayado">${nivel}</h3>
    `;
}




/* ================================
   REINICIAR EXAMEN
   ================================ */
function reiniciar() {
    localStorage.clear();
    window.location.href = "./pages/examen/intro1.html";
}


