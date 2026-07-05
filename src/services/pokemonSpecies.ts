export async function getPokemonSpecies(name: string) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error("Nao foi possivel carregar species do pokemon");
    }

    return response.json();
}