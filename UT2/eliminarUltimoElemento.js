// eliminarUltimoElemento.js

document.getElementById('eliminarUltimoElementoBtn').addEventListener('click', function() {
    const lista = document.getElementById('lista');
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});