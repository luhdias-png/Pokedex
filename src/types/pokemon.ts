export interface Pokemon {
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
}
