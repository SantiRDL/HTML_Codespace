// anadirElemento.js

document.getElementById('anadirElementoBtn').addEventListener('click', function() {
    const input = document.getElementById('nuevoElemento');
    const texto = input.value;
    if (texto.trim() !== '') {
        const lista = document.getElementById('lista');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = texto;
        lista.appendChild(nuevoElemento);
        input.value = '';
    }
    if (texto.trim() === '') {
        alert('No se puede añadir un elemento vacío');
    }
});