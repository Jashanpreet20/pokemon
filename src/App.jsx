import Header from "./components/Header";

import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  };

  //  console.log(pokemon)

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="w-full h-full mt-10 flex flex-col items-center justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`border-b-2  py-2 px-3 focus:outline-none ${
            inputValue ? "border-blue-500" : "border-gray-300"
          }`}
          placeholder="Type something..."
        />
        <button
          onClick={clearInput}
          className="mt-2 bg-red-500  hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
        >
          Clear
        </button>
      </div>
      <Item pokemon={searchData} />
    </div>
  );
}

export default App;
