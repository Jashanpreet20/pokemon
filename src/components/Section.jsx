import React from "react";
import Header from "./Header";

import Loading from "./Loading";
import Item from "./Item";
import Nothing from "./Nothing";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Context/ThemeProvider";

export default function Section() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { theme } = useContext(ThemeContext);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const searchData = pokemon.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const fetchDate = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailsData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailResponse = await Promise.all(detailsData);

      setPokemon(detailResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  //  console.log(pokemon)

  useEffect(() => {
    fetchDate();
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className={` w-full max-h-full ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <Header />
      <div className="w-full h-full mt-10 flex flex-col items-center justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`border-b-2 py-2 px-3 rounded-lg focus:outline-none 
        ${
          theme === "dark"
            ? "bg-gray-700 text-white"
            : " text-black bg-white border-black"
        }
        ${inputValue ? "border-blue-500" : "border-gray-300"}`}
          placeholder="Type something..."
        />
        <button
          onClick={clearInput}
          className={`mt-2  py-1 px-4 rounded font-bold
          ${
            theme === "dark"
              ? "bg-blue-500 text-white hover:bg-blue-900-700 "
              : "bg-green-500 hover:bg-green-800 text-black"
          }`}
        >
          Clear
        </button>
      </div>
      {searchData.length > 0 ? (
        <div>
          {" "}
          <Item pokemon={searchData} />
        </div>
      ) : (
        <div>
          <Nothing />
        </div>
      )}
    </div>
  );
}
