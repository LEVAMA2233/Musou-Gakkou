const navbar = () =>{
    return `
    <style>
    :root{/*Variables fusiladas de la identidad visual*/
    --rojo:#c91f13;
    --gris:#D9D9D9;
    --blanquino:#f5f3ec;
    --Tittle-and-subtitles:"El Messiri", sans-serif;
    --Content:"Source Sans 3", sans-serif;
        }


.navbar{
  background-color: black;
  max-width:100%;
  height: 100%;
  padding: 0px;
 }

#logo-muso{
  max-height: 90%; /* No permite que sea más alto que el contenedor */
    width: auto;      /* Mantiene la proporción */
    object-fit: contain; /* Asegura que la imagen quepa dentro del espacio sin deformarse */
    display: block;
}
 .navbar-brand{
    height: 100%;
    margin: 0px;
    padding:0px;
 }
 .navbar-nav{
 flex: 1;
 display:flex;
 justify-content: space-around;
  }
 .nav-item{
    margin-right: 4px;
 }
 .dropdown-item,
 .nav-link{
    color:var(--blanquino);
    font-family:var(--Tittle-and-subtitles);
    /* font-size: 1.5vw; */
    font-size: 2vw;
    border-radius: 10px;
 }
  .dropdown-menu{
    background-color: black;
    border: 0px;
  }
  .dropdown-item{
    width: 100%;
    border-radius:0px;
  }
 .navbar-brand:hover{
    color:var(--rojo);
 }
.dropdown-item:hover,
.nav-link:hover{
     color:black;
     background-color: #f5f3ec;

}
#logo-muso:hover{
    transform: scale(1.1);
}
.carrito{
  color: white;
  font-size: 6vh;
}
.carrito:hover{
    transform: scale(1.3);
}

.boton{
    background-color: #2C2C2C;
    color: var(--blanquino);
    font-family: var(--Tittle-and-subtitles);
    margin: 3px;
    font-size: 2vw;
    padding: 5px 10px;
    border-radius: 10px;
 }
 #btn-Log-in{
    background-color: #D9D9D9;
    color: black;
 }

 .boton:hover{
    background-color: #D9D9D9;
    color: var(--rojo);
 }
 #btn-Log-in:hover{
    background-color: var(--rojo);
    color: var(--blanquino);
 }
 .navbar-toggler:hover{
    color: var(--blanquino);
    background-color: var(--rojo);
 }

 body {
    text-align: center;
}
/* Solo para pantallas grandes (lg) */
@media (min-width: 992px) {
  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; /* Evita que se cierre al mover el mouse al menú */
  }
}
@media screen and (max-width: 991px) {

/*Hacemos que cada elemento del navbar ocupe el renglón completo cuando la pantalla es pequeña*/
.nav-item{
    width:100%;
}
/*Ahora cambia de color el renglón completo al seleccionar*/
.nav-item:hover{
    color:black;
    background-color: white;
}

/*Ajustamos el tamaño de fuente para que sea responsivo*/
.nav-link{
    font-size: large;
    border-radius: 0px;
 }

}
@container navbar (min-width: 700px) {
  .nav-link {
    font-size: 2em;
  }
}
    
    </style>
    <base href="../">
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top" data-bs-theme="dark">
            <div class="container-fluid" style=" height: 100%; padding:1%;">
              <a class="navbar-brand" href="/" style="    color:var(--blanquino); margin: 0px;">
                <img src="./assets/img/img-acercade/logo-muso.png" id="logo-muso" alt="Logo de Musou" class="img-fluid" style="max-height: 12vh; max-width: 100%; margin: 0px;">
              </a>
              <button class="navbar-toggler" style="color:#e6e6ff; margin-right: 20px;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon  mr-4"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./pages/cursos.html" >Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./pages/recursos.html">Recursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./pages/cultura.html">Cultura</a>
                  </li>
                  </li>
                  <!-- Menú dropdown solo se muestra en pantallas grandes -->
                  <li class="nav-item dropdown d-none d-lg-block">
                    <a class="nav-link dropdown-toggle" aria-current="page" href="/pages/acercaDe.html" role="button"  aria-expanded="false">Acerca de nosotros</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./pages/preguntasFrecuentes.html">Preguntas frecuentes</a></li>
                        <li><a class="dropdown-item" href="./pages/contacto.html">Contáctanos</a></li>
                    </ul>

                  </li>
                  <!-- Solo se muestran cuando la navbar colapsa -->
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="./pages/acercaDe.html">Acerca de nosotros</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="./pages/preguntasFrecuentes.html">Preguntas frecuentes </a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="./pages/contacto.html">Contáctanos</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="./pages/carrito.html">Carrito</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="./pages/logIn.html">Log in</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1">
                    <a class="nav-link" href="./pages/registro.html">Regístrate</a>
                  </li>
                  <!-- Solo se muestran como botones en  caso de pantallas grandes-->
                  <li class="nav-item d-none d-lg-block">
                    <a class="navbar-link" href="./pages/carrito.html">
                        <i class="fa fa-shopping-cart carrito"></i>
                    </a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <a class="boton" id="btn-Log-in"  href="./pages/logIn.html">Log in</a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <a class="boton" href="./pages/registro.html">Regístrate</a>
                  </li>
                </ul>
                
                  
                  
                
              </div>
            </div>
          </nav><!--Termina la navbar-->

    
    
    
    
    
    `
}
export {navbar};