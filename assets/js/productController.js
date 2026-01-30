//Archivo para llamar el JSON o la Database y de ahí exportarlo a los demás

// dataController.js
let cache = null;
export async function getProducts() {
    // If we already have the data, return it immediately
    //if (cache) return cache;

    try {
        const response = await fetch("/assets/json/cursos.json"); //Ruta al JSON
        if (!response.ok) throw new Error('Network response was not ok');
        
        cache = await response.json();
        return cache;
    } catch (error) {
        console.error("Failed to load courses:", error);
        return [];
    }
}

async function getCarrito(){
      // If we already have the data, return it immediately
    //if (cache) return cache;

    try {
        const response = await fetch("/assets/json/carrito.json"); //Ruta al JSON
        if (!response.ok) throw new Error('Network response was not ok');
        
        cache = await response.json();
        return cache;
    } catch (error) {
        console.error("Failed to load courses:", error);
        return [];
    }  
}

export {getCarrito};