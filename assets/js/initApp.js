//import navbarContent from "./components/navbar"; // importación por default
//import { setupEventListener } from "./components/setupEventListener";
//import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada
import {navbar} from "./components/navbar.js";
import {footer}  from "./components/footer.js";
const initApp = (ventana) =>{
    console.log("App Initialized");
    console.log(ventana);
    //Obtener la referencia al contenedor del navbar por su id
    const navbarContainer = document.getElementById("barra-navegacion");
    const footerContainer = document.getElementById("footer");
    navbarContainer.innerHTML = navbar();
    footerContainer.innerHTML = footer();
    //setupEventListener();
};

export{initApp}; // Exportación nombrada