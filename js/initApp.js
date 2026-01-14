//import navbarContent from "./components/navbar"; // importación por default
//import { setupEventListener } from "./components/setupEventListener";
//import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada
import {navbar} from "./components/navbar.js";
const initApp = () =>{
    console.log("App Initialized");

    //Obtener la referencia al contenedor del navbar por su id
    const navbarContainer = document.getElementById("barra-navegacion");
    navbarContainer.innerHTML = navbar();
    //setupEventListener();
};

export{initApp}; // Exportación nombrada