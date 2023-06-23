const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonHTML(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">
            #001
        </span>
        <span class="name">
            ${pokemon.name}
        </span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=${pokemon.name}>
        </div>
    </li>
    `;
}

const pokemonList = document.querySelector("#pokemonList");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonBody) {
    const pokemon = jsonBody.results;
   
    pokemon.forEach(function (pokemonData) {
      fetch(pokemonData.url)
        .then(function (response) {
          return response.json();
        })
        .then(function (pokemon) {
          pokemonList.innerHTML += convertPokemonHTML(pokemon);
        });
    });
  })
  .catch(function (error) {
    console.error(error);
  });

