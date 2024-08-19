// mostrarOcultar.js

document.getElementById('mostrarOcultarBtn').addEventListener('click', function() {
    const parrafo = document.getElementById('parrafo');
    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
});