// filtrarPersonas.js

const personas = ['Ana', 'Juan', 'Pedro', 'María', 'Luis', 'Sofía', 'Carlos'];

function renderizarLista(personas) {
    const lista = document.getElementById('listaPersonas');
    lista.innerHTML = '';
    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = persona;
        lista.appendChild(li);
    });
}

document.getElementById('buscar').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const personasFiltradas = personas.filter(persona => persona.toLowerCase().includes(filtro));
    renderizarLista(personasFiltradas);
});

// Renderizar la lista inicial
renderizarLista(personas);