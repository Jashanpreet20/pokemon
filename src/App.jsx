import Header from "./components/Header";

import Loading from "./components/Loading";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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

  if (loading) return <div><Loading/></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gray-900 w-full max-h-full">
      <Header />
      <div className="w-full h-full mt-10 flex flex-col items-center justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`border-b-2  rounded-lg bg-gray-800 text-white py-2 px-3 focus:outline-none ${
            inputValue ? "border-blue-500" : "border-gray-300"
          }`}
          placeholder="Type something..."
        />
        <button
          onClick={clearInput}
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
        >
          Clear
        </button>
      </div>
      <Item pokemon={searchData} />
    </div>
  );
}

export default App;
