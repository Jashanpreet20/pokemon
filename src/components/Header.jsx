import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "./Context/ThemeProvider";
export default function Header() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className="max-w-full w-full flex items-center justify-center space-x-12">
      <h1
        className={`text-4xl mt-10 leading-6 ${
          theme === "dark" ? "text-white" : "text-black"
        } `}
      >
        Let's Catch Pokemon
      </h1>

      <span onClick={handleTheme} className={`mt-11`}>
        {theme === "dark" ? (
          <FiSun color="white" size={30} />
        ) : (
          <FiMoon color="black" size={30} />
        )}
      </span>
    </div>
  );
}
