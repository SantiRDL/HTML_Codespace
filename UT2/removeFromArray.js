// removeFromArray.js

function removeFromArray(arreglo, item) {
    // Filtrar el arreglo para excluir el item
    const nuevoArreglo = arreglo.filter(elemento => elemento !== item);
    console.log(nuevoArreglo);
}

// Ejemplo de uso
removeFromArray([1, 2, 3, 4, 5], 3); // [1, 2, 4, 5]
removeFromArray(['a', 'b', 'c', 'd'], 'c'); // ['a', 'b', 'd']