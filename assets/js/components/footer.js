const footer = () =>{
    return`
    <style>
    :root{
    --rojo:#c91f13;
    --gris:#D9D9D9;
    --blanquino:#f5f3ec;
    --Tittle-and-subtitles:"El Messiri", sans-serif;
    --Content:"Source Sans 3", sans-serif;
}
    footer {
    border-top: 8px solid var(--rojo);
    font-size: 3vmin;
}
    .flama-footer{
    height:100%;
    margin-top: 10px;
    width: 90%;
    max-width:400px;
}
.logo-footer{
    width:25px;
    margin-top: 20px;
}
.text-md-center{
    color:#2C2C2C;
}
  a {
    text-align: center;
    font-family: var(--Content);
    color: black;
    text-decoration: none;
 }
  a:hover {
    color: var(--rojo);
  }

 .fw-bold{
    margin-top: 20px;
 }

 .contenedor-md-redes{
    height: 100%; /* Ensures they spread out to match the logo height */
 }
    </style>
		<div class="container-fluid">
      <div class="row" style="height: 100%">
        <div class="col-3 col-md-2 p-0 h-100">
          <a href="./"><img class="flama-footer "src="https://github.com/LEVAMA2233/Musou-Gakkou/blob/imgs/img-logos/logo_flama.png?raw=true"></a>
        </div>
        <div class="d-none d-md-flex flex-column col-md-1 text-center text-md-center justify-content-around">
          <a class="d-block" href=""><i class="fa fa-twitter" style="font-size:4vmin;"></i></a>
          <a class="d-block" href=""><i class="fa fa-instagram" style="font-size:4vmin;"></i></a>
          <a class="d-block" href=""><i class="fa fa-facebook" style="font-size:4vmin;"></i></a>
        </div>
         <div class="d-none d-md-block col-md-2 text-center text-md-start">
          <a href="./pages/contacto.html"><p class="fw-bold">Contáctanos</p></a>
        </div>
        <div class="d-none d-md-block col-md-2 text-center text-md-start">
          <a href="./pages/acercaDe.html"><p class="fw-bold">Acerca de nosotros</p></a>
        </div>

        <div class="d-none d-md-block col-md-1 text-center text-md-start ">
          <a href="./pages/cursos.html"><p class="fw-bold">Cursos</p></a>
          <a href="./pages/cursos.html"><p class="text-md-center">Clases</p></a>
          <a href="./pages/cursos.html"><p class="text-md-center">Recursos</p></a>
        </div>
        <div class="d-none d-md-block col-md-2 text-center">
          <a href="./pages/cultura.html"><p class="fw-bold">Cultura/Galeria</p></a>
        </div>
        <div class="d-none d-md-block col-md-2 text-center">
          <a href="./pages/preguntasFrecuentes.html"><p class="fw-bold">Preguntas frecuentes</p></a>
        </div>

        <div class="col-3 col-1-sm d-md-none align-self-center"><a href=""><i class="fa fa-twitter" style="font-size:6vmin"></i></a></div>
        <div class="col-3 col-1-sm d-md-none align-self-center"><a href=""><i class="fa fa-instagram" style="font-size:6vmin"></i></a></div>
        <div class="col-3 col-1-sm d-md-none align-self-center"><a href=""><i class="fa fa-facebook" style="font-size:6vmin"></i></a></div>
      </div>
    </div>
	`}
    export {footer};