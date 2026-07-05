export async function getPokemonForms(pokemonName: string){
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`
    )

    if(!response.ok){
        throw new Error("Nao foi possivel encontrar a versao especial desse pokemon")
    }

    const data = await response.json();

    return data.varieties;
}