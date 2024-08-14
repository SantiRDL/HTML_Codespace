// getTheTitles.js

function getTheTitles(books) {
    // Mapear el arreglo de libros para obtener solo los títulos
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}

// Ejemplo de uso
const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }
];

getTheTitles(books); // ['Book', 'Book2', 'Book3']