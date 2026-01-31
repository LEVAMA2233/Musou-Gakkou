//const fs = require('fs');
document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    const errores = {
        nombre: document.getElementById("errorNombre"),
        apellido: document.getElementById("errorApellido"),
        telefono: document.getElementById("errorTelefono"),
        email: document.getElementById("errorEmail"),
        password: document.getElementById("errorPassword"),
        password2: document.getElementById("errorPassword2")
    };

    const successMsg = document.getElementById("successMsg");

    
    Object.values(errores).forEach(e => e.textContent = "");
    successMsg.textContent = "";

    let valido = true;

    if (nombre.length < 2) {
        errores.nombre.textContent = "Nombre inválido";
        valido = false;
    }
    if (apellido.length < 2) {
        errores.apellido.textContent = "Apellido inválido";
        valido = false;
    }


    if (/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(telefono)) {
        errores.telefono.textContent = "Debe tener 10 dígitos numéricos";
        valido = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.email.textContent = "Correo inválido";
        valido = false;
    }

    
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        errores.password.textContent =
            "Mínimo 8 caracteres, una letra y un número";
        valido = false;
    }

    if (password !== password2) {
        errores.password2.textContent = "Las contraseñas no coinciden";
        valido = false;
    }

    if (valido) {
        successMsg.textContent = "Usuario registrado con exito";
    }
});
