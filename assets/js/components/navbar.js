const navbar = () => {
  return `
  <style>
      :root {
          --rojo: #c91f13;
          --gris: #D9D9D9;
          --blanquino: #f5f3ec;
          --Tittle-and-subtitles: "El Messiri", sans-serif;
          --Content: "Source Sans 3", sans-serif;
      }

      /* 1. FORZAMOS EL TAMAÑO DE LA BARRA */
      .navbar {
          padding-top: 5px !important;
          padding-bottom: 5px !important;
          min-height: 60px;
      }

      /* 2. TEXTOS MÁS PEQUEÑOS Y ELEGANTES */
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

      /* 3. AQUÍ ESTÁ LA SOLUCIÓN DE LOS LOGOS */
      
      /* Logo MUSO (Letras) */
      #logo-muso {
          max-height: 45px !important; /* Forzamos 45px. Antes tenías 70px */
          width: auto;
          transition: transform 0.3s;
      }
      
      #logo-muso:hover {
          transform: scale(1.1);
      }

      /* Logo CARRITO (El culpable principal) */
      #logo-carrito {
          height: 40px !important; /* Forzamos 40px. Antes tenías 75px */
          width: 40px !important;
          object-fit: contain;
          transition: transform 0.3s;
      }

      #logo-carrito:hover {
          transform: scale(1.1);
      }

      /* Botones */
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

      #btn-Log-in:hover {
          background-color: var(--rojo);
          color: var(--blanquino);
      }

      .navbar-toggler:hover {
          color: var(--blanquino);
          background-color: var(--rojo);
      }

      /* Ajustes para móviles */
      @media (min-width: 992px) {
          .nav-item.dropdown:hover .dropdown-menu {
              display: block;
              margin-top: 0;
          }
      }

      @media screen and (max-width: 991px) {
          .nav-item {
              width: 100%;
          }
          .nav-item:hover {
              color: black;
              background-color: white;
          }
          .nav-link {
              font-size: large;
              border-radius: 0px;
          }
      }
  </style>

  <nav class="navbar navbar-expand-lg custom-navbar sticky-top" data-bs-theme="dark" style="background-color: black; width: 100%;">
      <div class="container-fluid">
          <a class="navbar-brand" href="/" style="color:var(--blanquino); margin: 0px; display: flex; align-items: center;">
              <img src="/assets/img/img-acercade/logo-muso.png" id="logo-muso" alt="Logo de Musou">
          </a>
          
          <button class="navbar-toggler" style="color:#e6e6ff; margin-right: 20px;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto align-items-center">
                  <li class="nav-item"><a class="nav-link" href="/pages/cursos.html">Cursos</a></li>
                  <li class="nav-item"><a class="nav-link" href="/pages/recursos.html">Recursos</a></li>
                  <li class="nav-item"><a class="nav-link" href="/pages/cultura.html">Cultura</a></li>
                  
                  <li class="nav-item dropdown d-none d-lg-block">
                      <a class="nav-link dropdown-toggle" href="/pages/acercaDe.html" role="button" aria-expanded="false">Acerca de nosotros</a>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="/pages/preguntasFrecuentes.html">Preguntas frecuentes</a></li>
                          <li><a class="dropdown-item" href="/pages/contacto.html">Contáctanos</a></li>
                      </ul>
                  </li>

                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/acercaDe.html">Acerca de nosotros</a></li>
                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/preguntasFrecuentes.html">Preguntas frecuentes</a></li>
                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/contacto.html">Contáctanos</a></li>
                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/carrito.html">Carrito</a></li>
                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/logIn.html">Log in</a></li>
                  <li class="nav-item d-lg-none ms-1"><a class="nav-link" href="/pages/registro.html">Regístrate</a></li>

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