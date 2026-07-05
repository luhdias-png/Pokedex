export async function getPokemonEvolution(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Não foi possível carregar a evolução");
    }

    return response.json();
}