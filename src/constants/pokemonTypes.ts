import fire from "../assets/tipagem/fire.png"
import bug from "../assets/tipagem/bug.png"
import dark from "../assets/tipagem/dark.png"
import dragon from "../assets/tipagem/dragon.png"
import electric from "../assets/tipagem/electric.png"
import fairy from "../assets/tipagem/fairy.png"
import flying from "../assets/tipagem/fly.png"
import ghost from "../assets/tipagem/ghost.png"
import grass from "../assets/tipagem/grass.png"
import ground from "../assets/tipagem/ground.png"
import ice from "../assets/tipagem/ice.png"
import normal from "../assets/tipagem/normal.png"
import poison from "../assets/tipagem/poison.png"
import psychic from "../assets/tipagem/psychic.png"
import rock from "../assets/tipagem/rock.png"
import steel from "../assets/tipagem/steel.png"
import water from "../assets/tipagem/water.png"
import fighting from "../assets/tipagem/fighting.png";

export type PokemonTypeName = 
| "fire" | "bug" | "dark" | "dragon" | "electric"
  | "fairy" | "flying" | "ghost" | "grass" | "ground"
  | "ice" | "normal" | "poison" | "psychic" | "rock"
  | "steel" | "water" | "fighting";


export const typeImages: Record<PokemonTypeName, string> = {
  fire,
  bug,
  dark,
  dragon,
  electric,
  fairy,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
  fighting,
};