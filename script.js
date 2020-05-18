const url = 'https://pokeapi.co/api/v2/pokemon/'   
const myul = document.querySelector('.list-itens');
const button = document.getElementById('btn');

button.addEventListener('click', adicionarLista);

function adicionarLista() {

    const pokemon = fetch(url)
        .then(response => response.json())
        .then(function(poke) {
            
        const pokeName = poke.results

        for (let i = 0; i < pokeName.length; i++) {
            const itemPokemon = pokeName[i].name;
            const newli = document.createElement('li');
            newli.textContent = itemPokemon
            myul.appendChild(newli);
        };      
    });       
};






