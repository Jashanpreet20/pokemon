
import Card from "./Card";

export default function Item({pokemon}) {
 
  return (
    <div className="w-[1260px] h-full flex flex-col items-center justify-center mx-auto mt-10">
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-full h-full gap-x-2 gap-y-2">
        {pokemon.map((currPokemon) => {
          return <Card key={currPokemon.name} pokemonData={currPokemon}></Card>;
        })}
      </div>
    </div>
  );
}
