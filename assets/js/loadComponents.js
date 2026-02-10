// Carga el header desde el archivo components/header.html
// y lo inserta en el elemento con id 'header-placeholder'
fetch('/src/components/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
    });

// Carga el footer desde el archivo components/footer.html
// y lo inserta en el elemento con id 'footer-placeholder'
fetch('/src/components/footer.html')
    .then(response => response.text())
    .then(html => {
        const footer = document.getElementById('footer-placeholder')
        if(footer) {
            footer.innerHTML = html
        }
    });