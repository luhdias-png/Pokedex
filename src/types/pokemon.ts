export interface Pokemon{
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: PokemonStat[];
    types: PokemonType[];

    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
                front_shiny: string | null;
            };
        };
    };
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;

    stat: {
        name:
            | "hp"
            | "attack"
            | "defense"
            | "special-attack"
            | "special-defense"
            | "speed";

        url: string;
    };
}

export interface Evolution {
    name: string;
    url: string;
    details: EvolutionDetail[];
}

export interface EvolutionDetail {
    trigger: {
        name: string;
    };

    min_level: number | null;

    item: {
        name: string;
        url: string;
    } | null;
}

export interface TypeInfo {
    name: string;
    image: string;
}

export interface PokemonTypeInfo {
    name: string;
    image: string;
}

export interface PokemonForm {
    pokemon: {
        name: string;
        url: string;
    };
}