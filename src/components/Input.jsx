import React from 'react'
import { useState } from 'react';
export default function Input({pokemon,setData}) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const clearInput = () => {
      setInputValue('');
    };

    
  const searchData = pokemon.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  setData.push(searchData);


    


   
  return (
    <div className="w-full h-full mt-10 flex flex-col items-center justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={`border-b-2  py-2 px-3 focus:outline-none ${
          inputValue ? 'border-blue-500' : 'border-gray-300'
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
  )
}
