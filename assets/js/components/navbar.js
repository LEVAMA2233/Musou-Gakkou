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

      .navbar {
          padding-top: 5px !important;
          padding-bottom: 5px !important;
          min-height: 60px;
      }

      .nav-link, .dropdown-item {
          color: var(--blanquino);
          font-family: var(--Tittle-and-subtitles);
          font-size: 1.1rem !important; /* Estaba en x-large, muy grande */
          border-radius: 10px;
      }
      
      .nav-item {
          margin-right: 4px;
      }

      .dropdown-menu {
          background-color: black;
          border: 0px;
      }

      .dropdown-item {
          width: 100%;
          border-radius: 0px;
      }

      .navbar-brand:hover {
          color: var(--rojo);
      }

      .dropdown-item:hover,
      .nav-link:hover {
          color: black;
          background-color: #f5f3ec;
      }

      
      /* Logo MUSO (Letras) */
      #logo-muso {
          max-height: 45px !important; /* Forzamos 45px. Antes tenías 70px */
          width: auto;
          transition: transform 0.3s;
      }
      
      #logo-muso:hover {
          transform: scale(1.1);
      }

      #logo-carrito {
          height: 40px !important; /* Forzamos 40px. Antes tenías 75px */
          width: 40px !important;
          object-fit: contain;
          transition: transform 0.3s;
      }

      #logo-carrito:hover {
          transform: scale(1.1);
      }

      .boton {
          background-color: #2C2C2C;
          color: var(--blanquino);
          font-family: var(--Tittle-and-subtitles);
          margin: 3px;
          font-size: 1rem !important;
          padding: 5px 15px;
          border-radius: 10px;
          text-decoration: none;
          display: inline-block;
      }

      #btn-Log-in {
          background-color: #D9D9D9;
          color: black;
      }

      .boton:hover {
          background-color: #D9D9D9;
          color: var(--rojo);
      }

}
@container navbar (min-width: 700px) {
  .nav-link {
    font-size: 2em;
  }
}
    
    </style>
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top" data-bs-theme="dark">
            <div class="container-fluid" style=" height: 100%; padding:1%;">
              <a class="navbar-brand" href="/" style="    color:var(--blanquino); margin: 0px;">
                <img src="/assets/img/img-acercade/logo-muso-transparente.png" id="logo-muso" alt="Logo de Musou" class="img-fluid" style="max-height: 12vh; max-width: 100%; margin: 0px;">
              </a>
              <button class="navbar-toggler" style="color:#e6e6ff; margin-right: 20px;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon  mr-4"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/pages/cursos.html" >Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/pages/recursos.html">Recursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/pages/cultura.html">Cultura</a>
                  </li>
                  </li>
                  <!-- Menú dropdown solo se muestra en pantallas grandes -->
                  <li class="nav-item dropdown d-none d-lg-block">
                      <a class="nav-link dropdown-toggle" href="/pages/acercaDe.html" role="button" aria-expanded="false">Acerca de nosotros</a>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="/pages/preguntasFrecuentes.html">Preguntas frecuentes</a></li>
                          <li><a class="dropdown-item" href="/pages/contacto.html">Contáctanos</a></li>
                      </ul>
                  </li>

                  </li>
                  <!-- Solo se muestran cuando la navbar colapsa -->
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="/pages/acercaDe.html">Acerca de nosotros</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="/pages/preguntasFrecuentes.html">Preguntas frecuentes </a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="/pages/contacto.html">Contáctanos</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="/pages/carrito.html">Carrito</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="/pages/logIn.html">Log in</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1">
                    <a class="nav-link" href="/pages/registro.html">Regístrate</a>
                  </li>
                  <!-- Solo se muestran como botones en  caso de pantallas grandes-->
                  <li class="nav-item d-none d-lg-block">
                    <a class="navbar-link" href="/pages/carrito.html">
                        <i class="fa fa-shopping-cart carrito"></i>
                    </a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <a class="boton" id="btn-Log-in"  href="/pages/logIn.html">Log in</a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <a class="boton" href="/pages/registro.html">Regístrate</a>
                  </li>
                </ul>
                
                  
                  
                
              </div>
            </div>
          </nav><!--Termina la navbar-->

                  <li class="nav-item d-none d-lg-block">
                      <a class="navbar-link" href="/pages/carrito.html">
                          <img src="/assets/img/img-acercade/carrito-logo.png" id="logo-carrito" alt="Logo de carrito">
                      </a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                      <a class="boton" id="btn-Log-in" href="/pages/logIn.html">Log in</a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                      <a class="boton" href="/pages/registro.html">Regístrate</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  `;
}
export { navbar };