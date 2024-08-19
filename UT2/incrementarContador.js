// incrementarContador.js

document.getElementById('incrementarBtn').addEventListener('click', function() {
    const contador = document.getElementById('contador');
    let numero = parseInt(contador.textContent, 10);
    numero += 1;
    contador.textContent = numero;
});