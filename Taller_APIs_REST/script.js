const characterList = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(character => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Estado: ${character.status}</p>
                        <p class="card-text">Especie: ${character.species}</p>
                    </div>
                </div>
            `;
            characterList.appendChild(col);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
