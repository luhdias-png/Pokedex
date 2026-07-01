import pokeball from "../assets/pokeball.svg"
import fire from "../assets/tipagem/fire.png"
import fly from "../assets/tipagem/fly.png"
import grass from "../assets/tipagem/grass.png";
import steel from "../assets/tipagem/steel.png";
import water from "../assets/tipagem/water.png";
import ground from "../assets/tipagem/ground.png";
import rock from "../assets/tipagem/rock.png";

type StatsProps = {label: string 
  value: number
}

const strengths = [fire, grass, steel, water];
const weaknesses = [water, ground, rock];

const stats = [
  { label: "HP", value: 35 },
  { label: "ATK", value: 55 },
  { label: "DEF", value: 40 },
  { label: "SP ATK", value: 140 },
  { label: "SP DEF", value: 140 },
  { label: "SPD", value: 90 },
];

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

            <div className="relative flex h-56 sm:h-64 items-center justify-center rounded-lg bg-black/50 p-4">
            <div className="absolute top-1 right-1 z-20 flex gap-0.5">
            <img src={fire} alt="" className="h-8 drop-shadow-lg" />
            <img src={fly} alt="" className="h-8 drop-shadow-lg" />
            </div>
            <img src={pokeball} alt="Pokeball" className="absolute w-44 sm:w-56 xl:w-62 opacity-20"/>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="Steelix" className="relative z-10 w-52 sm:w-60 xl:w-70"/>

            </div>

            <div className="mt-4 flex justify-between items-center">

              <div className="w-5 h-5 rounded-full bg-red-600" />

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

              <button className={dpadButton}>▲</button>

              <div />

              <button className={dpadButton}>◀</button>

              <button className={dpadButton}>●</button>

              <button className={dpadButton}>▶</button>

              <div />

              <button className={dpadButton}>▼</button>

            </div>

          </div>

          <div className="pokedex-scroll mt-5 bg-green-800/80 overflow-y-auto rounded-md h-35 border-gray-200 border-4 flex font-bold p-2">

           <div className="text-xs sm:text-sm leading-5 sm:leading-6 text-zinc-200">
            <p className="text-xs sm:text-sm font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ea beatae error, voluptates, dolore possimus incidunt placeat vel laudantium rem harum, unde obcaecati ut neque eligendi corporis labore qui maxime!</p>
           </div> 

          </div>

        </section>

        <div className="h-4 xl:h-auto xl:w-8 bg-red-700" />

        <section className="w-full xl:w-105 bg-red-600 p-4 sm:p-6">

          <div className="bg-zinc-800/80 rounded-lg h-11 mb-8 text-zinc-100 flex items-center justify-between p-5 font-mono text-xl">
            <p>Id: 006</p>
            <h3>Charizard</h3>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">

            <div className="bg-green-600 rounded-[10px] hover:cursor-pointer hover:bg-green-600/90">
              <h3 className="text-sm font-bold text-white p-2 flex justify-center">
                VANTAGENS
              </h3>

              <div className="grid grid-cols-3 place-items-center p-2 gap-1">
                {strengths.map((type, index) => (
                  <img
                    key={index}
                    src={type}
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
                {weaknesses.map((type, index) => (
                  <img
                    key={index}
                    src={type}
                    alt=""
                    className="h-10 w-10 transition-transform hover:scale-115"
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 -m-1">
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