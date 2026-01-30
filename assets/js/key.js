function validarAccesoAdmin() {
    Swal.fire({
        title: 'Acceso Restringido',
        text: 'Por favor, ingresa la llave maestra de JESA Sports:',
        input: 'password', // Esto oculta los caracteres
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Entrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#10b981',
        cancelButtonColor: '#ef4444',
        showLoaderOnConfirm: true,
        preConfirm: (pass) => {
            // Llave de acceso correcta
            const LLAVE_MAESTRA = "Jesa2026";

            if (pass === LLAVE_MAESTRA) {
                return true;
            } else {
                Swal.showValidationMessage('Llave incorrecta. Inténtalo de nuevo.');
                return false;
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Acceso Concedido!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "../../adminProductos.html";
            });
        }
    });
}