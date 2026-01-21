const numerosNoPermitidos=/[0-9]/;//Del 0 al 9,


const validacionFormulario = () => {

    const formulario = document.getElementById("Formulario");

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if (!formulario)
        return;//Termina la función en caso de que no se use esta función en otra página porque sino habrá errores en el DOM de main

    formulario.addEventListener('submit', function (event) {
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        console.log("Enviando formulario");

        if (validarNombresyApellidos(nombre,apellidos) || validaMensaje(mensaje)) {

            event.preventDefault(); // Detiene el envío a FormSubmit
            return;
        }



    });
}

function validarNombresyApellidos(nombre,apellidos){
    if(nombre.length<3 || apellidos.length<3){
        alert("Ingresa por lo menos 3 caracteres en los apartados Nombre y/o Apellidos.");
        console.log("No tiene tamaño requerido");
        return true;
    }
        if(numerosNoPermitidos.test(nombre)||numerosNoPermitidos.test(apellidos)){
            alert("Los campos de Nombre y Apellido no deben contener números.")
            console.log("Campos con numeros no permitidos");
            return true;
        console.log("formulario no enviado");
        }
}

function validaMensaje(mensaje){
    if(mensaje==""){
        alert("Ingresa un mensaje.");
        return true;
    }else if(mensaje.length<10){
        alert("Ingresa un mensaje de por lo menos 10 caracteres por favor.");
        return true;
    }
}


export { validacionFormulario }