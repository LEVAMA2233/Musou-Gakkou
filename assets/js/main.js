// Import our custom CSS
//import '../scss/styles.scss'
import { initApp } from './initApp.js';
import { validacionFormulario } from './components/validacionFormsContactanos.js';
//import {initApp} from './initApp';
// Import all of Bootstrap’s JS
//import * as bootstrap from 'bootstrap'

/**
 *  ¿Qué es addEventListener?
 *  Es un método que permite escuchar eventos (como click, keydown, submit, etc.) en un elemento 
 *  del DOM, y ejecutar una función cuando ese evento ocurre.
 * 
 *  Usa addEventListener para código más limpio, modular y flexible. 
 *  Usa onclick solo en scripts simples o casos rápidos.
 * 
 *  Diferencias y ventajas vs onclick
 *  Característica          addEventListener                     onclick
 *  Múltiples handlers      ✅ Permite varios listeners          ❌ Solo uno, el último sobrescribe
 *  Separación lógica       ✅ Mantiene mejor el orden del JS    ❌ Mezcla estructura y lógica
 *  Soporte de eventos      ✅ Soporta todos los eventos         ❌ Solo click
 *  Compatibilidad          ✅ Funciona en todos los navegadores ❌ No soportado en IE8 y anteriores
 *  Remoción de eventos     ✅ Se puede eliminar fácilmente      ❌ No se puede eliminar
 *  Compatibilidad con IE   ✅ Funciona en IE9+                  ❌ Solo en IE8 y anteriores
 *  
 * 
 */


window.addEventListener("load",()=>{
  initApp(window.location.pathname);
  console.log(window.location.pathname) //para debug
  if (window.location.pathname == './pages/contacto.html'){ // Para ejecutar la validación del formulario solo en dicha página
      validacionFormulario();
  }  
});

/*
     Ciclo de vida: DOMContentLoaded asegura que los elementos existan
        Diferencia entre load y DOMContentLoaded:
        load: Espera a que toda la página, incluyendo imágenes y estilos, 
        se cargue completamente antes de ejecutar el código.
        DOMContentLoaded: Se activa tan pronto como el DOM esté completamente 
        cargado y parseado, sin esperar a que se carguen imágenes u otros recursos externos.  
  */
//window.addEventListener("DOMContentLoaded",initApp);