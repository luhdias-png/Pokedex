import { GoogleGenAI } from "@google/genai";
import type { Pokemon, PokemonType, Evolution, TypeInfo, } from "../types/pokemon";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

type PokemonAIRequest = {
    question: string;
    pokemon: Pokemon | null;
    description: string;
    pokemonTypes: PokemonType[];
    vantagens: TypeInfo[];
    fraquezas: TypeInfo[];
    evolutions: Evolution[];
};


export async function askPokemonAI({
    question,
    pokemon,
    description,
    pokemonTypes,
    vantagens,
    fraquezas,
    evolutions,
}: PokemonAIRequest) {
    console.log({
    pokemon,
    pokemonTypes,
    vantagens,
    fraquezas,
    evolutions,
});
    try {

        const prompt = `
Você é a Levva Pokémon AI.

Sua função é responder SOMENTE perguntas relacionadas ao universo Pokémon.

Se a pergunta não for sobre Pokémon, responda:

"Desculpe, eu respondo apenas perguntas relacionadas a Pokémon."

Sempre considere o Pokémon atualmente aberto na Pokédex.

=== Pokémon Atual ===

Nome:
${pokemon?.name ?? "Desconhecido"}

Descrição:
${description}


Fraquezas:
${fraquezas.map(type => type.name).join(", ")}

Vantagens:
${vantagens.map(type => type.name).join(", ")}

Linha evolutiva:
${evolutions.map(e => e.name).join(" → ")}

=== Pergunta ===

${question}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text ?? "Não consegui gerar uma resposta.";
    } catch (error: any) {

    if (error.status === 429) {
        return "A IA atingiu o limite de uso temporariamente. Aguarde alguns instantes e tente novamente.";
    }

    return "Ocorreu um erro ao consultar a IA.";
    }
}