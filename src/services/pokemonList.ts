export async function getPokemonList() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000"
    );

    if (!response.ok) {
        throw new Error("Erro ao carregar Pokémon");
    }

    return response.json();
}