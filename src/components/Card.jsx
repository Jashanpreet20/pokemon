import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeProvider";

export default function Card({ pokemonData }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full flex flex-col items-start justify-between  px-2 py-2
      ${theme === 'dark' ? "bg-gray-800 text-white" : "text-black bg-white"}
     p-6 rounded-lg shadow-lg hover:scale-105 duration-200 transition-all`}
    >
      <div className="flex items-center justify-center w-full ">
        <img
          className="w-[100px] h-[100px] mt-2"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt="image_url"
        />
      </div>

      <div className="flex flex-col justify-center items-center  w-full">
        <h1 className="text-xl ">{pokemonData.name}</h1>
        <p className={`bg-green-500 capitalize px-2 py-1 mt-2 rounded-md text-center ${
            theme === "dark"
              ? "bg-blue-500 text-white hover:bg-blue-900-700"
              : "bg-green-500 hover:bg-green-800 text-black"
          }`}>
          {pokemonData.types.map((currtype) => currtype.type.name).join(", ")}
        </p>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between w-full gap-x-3 px-2 py-1 mx-auto">
          <div className="flex items-start justify-between">
            <p className="text-center w-full">
              <span className=" font-bold">height:</span>
              {pokemonData.height}
            </p>
          </div>
          <div className="flex items-start justify-between w-full">
            <p className="text-center w-full">
              <span className=" font-bold">weight:</span>
              {pokemonData.weight}
            </p>
          </div>
          <div className="flex items-start justify-between w-full">
            <p className="text-center w-full">
              <span className=" font-bold">speed:</span>
              {pokemonData.stats[5].base_stat}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full gap-x-3 px-2 py-1 mx-auto">
          <div className="flex flex-col items-start justify-between">
            <p>{pokemonData.base_experience}</p>
            <span className=" font-bold">experience</span>
          </div>
          <div className="flex flex-col items-start justify-between">
            <p>{pokemonData.stats[1].base_stat}</p>
            <span className=" font-bold">Attack</span>
          </div>
          <div className="flex flex-col items-start justify-between">
            <p>
              {pokemonData.abilities
                .map((ablitityInfo) => ablitityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
            <span className="font-bold">Abilitites:</span>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-3 gap-4 items-center justify-center">
<div className="flex flex-col gap-2">
  <div className="flex justify-between items-center w-full gap-x-2 ml-3">
    <p className="text-center w-full">
      <span className="text-black font-bold">height:</span>
      {pokemonData.height}
    </p>
    <p className="text-center w-full">
      <span className="text-black font-bold">weight:</span>
      {pokemonData.weight}
    </p>
    <p className="text-center w-full">
      <span className="text-black font-bold">speed:</span>
      {pokemonData.stats[5].base_stat}
    </p>
  </div>
  <div className="flex justify-between items-center w-full gap-x-2 ml-3">
    <div className="flex flex-col">
      <p>{pokemonData.base_experience}</p>
      <span className="text-black font-bold">experience</span>
    </div>
    <div className="flex flex-col">
      <p>{pokemonData.stats[1].base_stat}</p>
      <span className="text-black font-bold">Attack</span>
    </div>
    <div className="flex flex-col">
      <p>
        {
          pokemonData.abilities
            .map((ablitityInfo) => ablitityInfo.ability.name)
            .slice(0,1)
            .join(", ")
        }
      </p>
      <span className="text-black font-bold">Abilitites:</span>
    </div>
  </div>
</div>
</div> */
}
