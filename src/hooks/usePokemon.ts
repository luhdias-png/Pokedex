import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon";
import { getPokemonForms } from "../services/pokemonForms";
import type { Pokemon, Evolution, PokemonStat, TypeInfo, PokemonForm } from "../types/pokemon";
import { typeImages } from "../constants/pokemonTypes";
import { getPokemonType } from "../services/pokemonType";
import { getPokemonSpecies } from "../services/pokemonSpecies";
import { getPokemonEvolution } from "../services/pokemonEvolution";

export function usePokemon() {
    const [evolutions, setEvolutions] = useState<Evolution[]>([]);
    const [description, setDescription] = useState("");   
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [pokemonId, setPokemonId] = useState<number>(1);
    const [forms, setForms] = useState<PokemonForm[]>([]);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [spriteMode, setSpriteMode] = useState<"padrao" | "shiny">("padrao");
    const spriteModes = ["padrao", "shiny"] as const;
    const pokemonTypes =
        pokemon?.types.map((type) => ({
            name: type.type.name,
            image:
                typeImages[type.type.name as keyof typeof typeImages],
        })) ?? [];

    const [vantagens, setVantagens] = useState<TypeInfo[]>([]);
    const [fraquezas, setFraquezas] = useState<TypeInfo[]>([]);
    
    const currentForm = forms[currentFormIndex] ?? null;
    const displayName =
        !pokemon
            ? ""
            : spriteMode === "shiny"
                ? `Shiny ${pokemon.name
                    .replaceAll("-", " ")
                    .replace(/\b\w/g, letter => letter.toUpperCase())}`
                : pokemon.name
                    .replaceAll("-", " ")
                    .replace(/\b\w/g, letter => letter.toUpperCase());

    function resetPokemonView() {
        setCurrentFormIndex(0);
        setSpriteMode("padrao");
    }

    function getPokemonImage() {
        if (!pokemon) return "";

        const artwork = pokemon.sprites.other["official-artwork"];
        
        switch (spriteMode) {
            case "shiny":
                return artwork.front_shiny ?? artwork.front_default;

            default:
                return artwork.front_default;
        }
    }

    function nextPokemon() {
        setPokemonId(id => id + 1);
        resetPokemonView();
    }

    function prevPokemon() {
        setPokemonId(id => Math.max(1, id - 1));
        resetPokemonView();
    }

    async function searchPokemon(name: string) {
    const trimmedName = name.trim().toLowerCase();
    if (!trimmedName) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${trimmedName}`);
        
        if (!response.ok) {
            alert("Pokémon não encontrado!");
            return;
        }

        const data = await response.json();
        
        setPokemonId(data.id);
        setPokemon(data);
        
        resetPokemonView();
        
    } catch (error) {
        alert("Erro ao buscar Pokémon");
    }
}

    function changeSprite() {
        setSpriteMode(current => {
            const index = spriteModes.indexOf(current);
            const nextIndex = (index + 1) % spriteModes.length;

            return spriteModes[nextIndex];
        });
    }

    function changeForm(direction: "next" | "prev") {
        if (forms.length === 0) return;

        setCurrentFormIndex(index => {
            if (direction === "next") {
                return (index + 1) % forms.length;
            }

            return (index - 1 + forms.length) % forms.length;
        });
    }


    const statLabels = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SP ATK",
    "special-defense": "SP DEF",
    speed: "SPD",
    };

    const stats = pokemon?.stats.map((stat: PokemonStat) => ({
     label: statLabels[stat.stat.name],
     value: stat.base_stat,})) ?? [];

     useEffect(() => {
}, [evolutions]);

    useEffect(() => {
        async function loadPokemon() {
            const data = await getPokemon(pokemonId);

            setPokemon(data);

            const pokemonForms = await getPokemonForms(data.name);
            
            setForms(pokemonForms);
            
            setCurrentFormIndex(0);
            
            const species = await getPokemonSpecies(data.name);
            
            const description =
            species.flavor_text_entries.find(
                (entry: any) => entry.language.name === "en"
            )?.flavor_text
            .replace(/[\n\f]/g, " ")
            .trim() ?? "";
            
            setDescription(description);
            
            const evolution = await getPokemonEvolution(species.evolution_chain.url);
            const evolutionList: Evolution[] = [];
            
            
function visitNode(node: any) {

    evolutionList.push({
        name: node.species.name,
        url: node.species.url,
        details: node.evolution_details
    });

    for (const evolution of node.evolves_to) {
        visitNode(evolution);
    }
}
            
            visitNode(evolution.chain);
            
            setEvolutions(evolutionList);
            
            const firstType = data.types[0].type.name;
            
            const typeData = await getPokemonType(firstType);
            
            const vantagemPokemon = typeData.damage_relations.double_damage_to.map(
            (type: { name: string }) => ({
                name: type.name,
                image: typeImages[type.name as keyof typeof typeImages]
            })
            );
            
            setVantagens(vantagemPokemon);
            
            const fraquezaPokemon = typeData.damage_relations.double_damage_from.map(
            (type: { name: string }) => ({
                name: type.name,
                image: typeImages[type.name as keyof typeof typeImages]
            })
            );
            
            setFraquezas(fraquezaPokemon);
        }
        
        
        loadPokemon();
    }, [pokemonId]);
    
    useEffect(() => {
        if (!currentForm) return;
        
        async function loadCurrentForm() {
            const data = await getPokemon(currentForm.pokemon.name);
            
            setPokemon(data);
        }
        
        loadCurrentForm();
    }, [currentForm]);
    
    
    return {
        pokemon,
        pokemonId,
        forms,
        stats,
        changeForm,
        nextPokemon,
        prevPokemon,
        changeSprite,
        spriteMode,
        displayName,
        image: getPokemonImage(),
        pokemonTypes,
        vantagens,
        fraquezas,
        description,
        evolutions,
        searchPokemon,
    };
}