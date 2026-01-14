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
    width: 100vw;
 }

#logo-muso{
     height: 70px;
}
 .navbar-brand{
    color:var(--blanquino);
 }
 .nav-item{
    margin-right: 10px;
 }
 .nav-link{
    color:var(--blanquino);
    font-family:var(--Tittle-and-subtitles);
    /* font-size: 1.5vw; */
    font-size: x-large;
    border-radius: 10px;
 }
 .navbar-brand:hover{
    color:var(--rojo);
 }
.nav-link:hover{
     color:black;
     background-color: #f5f3ec;

}
#logo-muso:hover{
    transform: scale(1.3);
}
#logo-carrito{
    max-height: 60%;
}
#logo-carrito:hover{
    transform: scale(1.3);
}

.btn{
    background-color: #2C2C2C;
    color: var(--blanquino);
    font-family: var(--Tittle-and-subtitles);
    margin: 10px;
    font-size: x-large;
 }
 #btn-Log-in{
    background-color: #D9D9D9;
    color: black;
 }

 .btn:hover{
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

    
    </style>
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top " data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="./img-acercade/logo-muso.png" id="logo-muso" alt="Logo de Musou" class="img-fluid">
              </a>
              <button class="navbar-toggler" style="color:#e6e6ff; margin-right: 20px;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon  mr-4"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto align-items-center">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Recursos educativos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Cultura</a>
                  </li>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" >Acerca de nosotros</a>
                  </li>
                  <!-- Solo se muestran cuando la navbar colapsa -->
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="#">Carrito</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1" >
                    <a class="nav-link" href="#">Log in</a>
                  </li>
                  <li class="nav-item d-lg-none ms-1">
                    <a class="nav-link" href="#">Regístrate</a>
                  </li>
                  <!-- Solo se muestran como botones en  caso de pantallas grandes-->
                  <li class="nav-item d-none d-lg-block">
                    <a class="navbar-brand" href="#">
                        <img src="./img-acercade/carrito-logo.png" id="logo-carrito" alt="Logo de carrito" class="img-fluid">
                    </a>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <button class="btn " id="btn-Log-in" type="submit">Log in</button>
                  </li>
                  <li class="nav-item d-none d-lg-block">
                    <button class="btn " type="submit">Regístrate</button>
                  </li>
                </ul>
                
                  
                  
                
              </div>
            </div>
          </nav><!--Termina la navbar-->

    
    
    
    
    
    `
}
export {navbar};