// reverseString.js

function reverseString(texto) {
    // Convertir el string en un array, invertir el array y luego unirlo de nuevo en un string
    const textoInvertido = texto.split('').reverse().join('');
    console.log(textoInvertido);
}

// Ejemplo de uso
reverseString("¡Hola, mundo!");