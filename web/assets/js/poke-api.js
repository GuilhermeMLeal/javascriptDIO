

const pokeapi={}

pokeapi.getPokemons = (offset=0 ,limit=10)=>{
   // const offset = 0;
   // const limit = 10;

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) =>jsonBody.results)
    .catch(function (error) {
        console.error(error);
      });
}