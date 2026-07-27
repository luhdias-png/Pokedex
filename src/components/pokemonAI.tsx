import { useState } from "react"
import { askPokemonAI } from "../services/pokemonAI";
import type { Pokemon, Evolution, TypeInfo, PokemonTypeInfo } from "../types/pokemon";

type PokemonAIProps = {
    pokemon: Pokemon | null;
    description: string;
    pokemonTypes: PokemonTypeInfo[];
    vantagens: TypeInfo[];
    fraquezas: TypeInfo[];
    evolutions: Evolution[];
};


export default function PokemonAI({
    pokemon,
    description,
    pokemonTypes,
    vantagens,
    fraquezas,
    evolutions,
}: PokemonAIProps){

    const[question, setQuestion] = useState("");
        const[answer, setAnswer] = useState(
            "Faça uma pergunta a Levva Pokemon."
        );

        async function handleAsk(){
            if(!question.trim()) return;
            const response = await askPokemonAI({
                question,
                pokemon,
                description,
                pokemonTypes,
                vantagens,
                fraquezas,
                evolutions,
            });
            setAnswer(response)
            setQuestion("");
        }

    return(
        <div className="mt-10 rounded-xl bg-zinc-900/40 p-5 shadow-lg">

          <h2 className="mb-4 text-lg font-bold text-white text-center">
            Pokédex AI
          </h2>

          <div className="pokedex-scroll h-36 overflow-y-auto rounded-lg bg-green-900/70 p-3 text-sm leading-4.5 text-green-100">
             {answer}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">

            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ex: Qual é a fraqueza dele?" className=" flex-1 rounded-lg border border-zinc-600 bg-white/10 px-3 py-3 text-white placeholder:text-zinc-400 outline-none transition focus:border-blue-400 focus:ring-1 focus:ring-cyan-400/"/>

            <button onClick={handleAsk} className="rounded-lg bg-yellow-400 px-6 font-semibold text-zinc-900 transition-all hover:bg-yellow-500 active:scale-95 w-full sm:w-auto">Enviar</button>

          </div>

        </div>    
    )
}