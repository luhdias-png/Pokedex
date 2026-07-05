export async function getPokemonType(typeName: string) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/type/${typeName.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Tipo não encontrado");
  }

  return response.json();
}