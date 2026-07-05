import pokeball from "../assets/pokeball.svg"
import { usePokemon } from "../hooks/usePokemon";
import { useState } from "react";


type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: string;
  status: string;
}


type StatsProps = {label: string 
  value: number
}

function Stats({ label, value }: StatsProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-black/50 p-3 shadow-black shadow-md">
      <span className="font-medium text-white">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  )
}

const dpadButton = "w-8 h-8 bg-gray-600 border-2 border-gray-900 rounded text-amber-50 relative items-center justify-center flex font-mono brightness-90 shadow-[0_1px_0_rgb(24,24,27)] transition-al lduration-100 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_7px_0_rgb(24,24,27)] active:translate-y-1 active:scale-95 active:brightness-90 active:shadow-[0_1px_0_rgb(24,24,27)] cursor-pointer select-none"

export function Pokedex() {
  const [isShaking, setIsShaking] = useState(false);
  const {pokemon, pokemonId, nextPokemon, prevPokemon, changeSprite, image, displayName, changeForm, stats, pokemonTypes, vantagens, fraquezas, description, namePT, evolutions } = usePokemon() as {
    pokemon: Pokemon | null;
    nextPokemon: () => void;
    prevPokemon: () => void;
  };

function animateChange(action: () => void) {
  setIsShaking(true);

  action();

  setTimeout(() => {
    setIsShaking(false);
  }, 400);
}


  return (

    <div className="flex justify-center p-2 sm:p-4">
      <div className="flex flex-col xl:flex-row rounded-xl shadow-2xl overflow-hidden w-full max-w-225">

        {/* Lado esquerdo */}
        <section className="w-full xl:w-105 bg-red-600 p-4 sm:p-6 xl:border-r-8 border-b-8 xl:border-b-0 border-red-800">

          {/* Luz */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500 border-4 border-white animate-pokedex-light" />

            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-red-400" />
              <div className="w-5 h-5 rounded-full bg-yellow-300" />
              <div className="w-5 h-5 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Tela */}
          <div className="bg-gray-200 rounded-xl p-5">

            <div className="bg-zinc-800/80 rounded-lg h-11 mb-8 text-zinc-100 flex items-center justify-between p-5 font-mono text-xl">
            <p>{pokemonId}</p>
            <h3>{displayName}</h3>

          </div>

            <div className="relative flex h-56 sm:h-68 items-center justify-center rounded-lg bg-black/50 p-4">
            <img src={pokeball} alt="Pokeball" className="absolute w-44 sm:w-56 xl:w-62 opacity-20"/>

            <img src={image} alt={pokemon?.name} className={`relative z-10 w-52 sm:w-60 xl:w-70 ${isShaking ? "animate-shake" : ""}`}/>

            </div>

            <div className="mt-4 flex justify-between items-center">

              <div className="w-5 h-5 rounded-full bg-red-600" />

            <div className="z-20 flex gap-1 w-auto rounded-lg">
              {pokemonTypes.map((type) => (
                <img
                  key={type.name}
                  src={type.image}
                  alt={type.name}
                  className="h-10 drop-shadow-lg"
                />
              ))}
            </div>
              <div className="space-y-1">
                <div className="w-10 h-1 bg-gray-600 rounded" />
                <div className="w-10 h-1 bg-gray-600 rounded" />
                <div className="w-10 h-1 bg-gray-600 rounded" />
              </div>

            </div>

          </div>

          {/* Controles */}

          <div className="mt-6 flex justify-between items-center">

            <button className="w-10 h-10 rounded-full bg-black cursor-pointer"></button>

            <div className="grid grid-cols-3">

              <div />

              <button onClick={() => animateChange(() => changeForm("next"))} className={dpadButton}>▲</button>

              <div />

              <button onClick={prevPokemon} className={dpadButton}>◀</button>

              <button onClick={() => animateChange(changeSprite)} className={dpadButton}>●</button>

              <button onClick={nextPokemon} className={dpadButton}>▶</button>

              <div />

              <button onClick={() => animateChange(() => changeForm("prev"))} className={dpadButton}>▼</button>

            </div>

          </div>

          <div className="pokedex-scroll mt-5 bg-green-800/80 overflow-y-auto rounded-md h-35 border-gray-200 border-4 flex font-bold p-2">

          <div className="text-xs sm:text-sm font-bold space-y-4 text-white">

            <div>
              <span>Descrição:</span>
              <p className="mt-1 font-normal">
                {description}
              </p>
            </div>

            <div>
              <span>Evolução:</span>

              <div className="mt-2 flex flex-wrap">
                {evolutions.map((evolution, index) => (
                  <div key={evolution.name} className="flex items-center">
                    <div className="rounded-md px-3 py-1">
                      {evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}
                    </div>
                    {index < evolutions.length - 1 && (
                      <span className="text-lg">→</span>)}
                  </div>))}
                  
              </div>

            </div>

          </div>

          </div>

        </section>

        <div className="h-4 xl:h-auto xl:w-8 bg-red-700" />

        <section className="w-full xl:w-105 bg-red-600 p-4 sm:p-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">

            <div className="bg-green-600 rounded-[10px] hover:cursor-pointer hover:bg-green-600/90">
              <h3 className="text-sm font-bold text-white p-2 flex justify-center">
                VANTAGENS
              </h3>

              <div className="grid grid-cols-3 place-items-center p-2 gap-1">
                {vantagens.map((type, index) => (
                  <img
                    key={index}
                    src={type.image}
                    alt=""
                    className="h-10 w-10 transition-transform hover:scale-115"
                  />
                ))}
              </div>
            </div>

            <div className="bg-black/50 rounded-[10px] hover:cursor-pointer hover:bg-black/60">
              <h3 className="text-sm font-bold text-white p-2 flex justify-center">
                FRAQUEZAS
              </h3>

              <div className="grid grid-cols-3 place-items-center p-2 gap-1">
                {fraquezas.map((type, index) => (
                  <img
                    key={index}
                    src={type.image}
                    alt=""
                    className="h-10 w-10 transition-transform hover:scale-115"
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 -m-1">
            {stats.map((stat) => (
              <Stats
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>

        <div className="mt-10 rounded-xl bg-zinc-900/40 p-5 shadow-lg">

          <h2 className="mb-4 text-lg font-bold text-white text-center">
            Pokédex AI
          </h2>

          <div className="h-36 overflow-y-auto rounded-lg bg-green-900/70 p-3 text-sm leading-4.5 text-green-100">
            Faça uma pergunta sobre o Pokémon. ja que estou com muita 
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">

            <input type="text" placeholder="Ex: Qual é a fraqueza dele?" className=" flex-1 rounded-lg border border-zinc-600 bg-white/10 px-3 py-3 text-white placeholder:text-zinc-400 outline-none transition focus:border-blue-400 focus:ring-1 focus:ring-cyan-400/"/>

            <button className=" rounded-lg bg-yellow-400 px-6 font-semibold text-zinc-900 transition-all hover:bg-yellow-500 active:scale-95 w-full sm:w-auto">Enviar</button>

          </div>

        </div>        

        </section>

      </div>
    </div>
  )
}