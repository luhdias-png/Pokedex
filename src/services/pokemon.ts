import type { Pokemon } from "../types/pokemon";

export async function getPokemon(
  identifier: number | string
): Promise<Pokemon> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${identifier.toString().toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Pokémon não encontrado");
  }

  return response.json() as Promise<Pokemon>;
}