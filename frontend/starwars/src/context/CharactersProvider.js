import CharactersContext from "./CharactersContext";
import { useEffect, useState } from "react";
import getCharacters from "../fetchCharacters";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const apiReturn = async () => {
      const result = await getCharacters();
      setCharacters(result);
    };
    apiReturn();
  }, []);
  return (
    <div>
      {characters && characters.length > 0 && (
        <CharactersContext.Provider value={characters}>
          {children}
        </CharactersContext.Provider>
      )}
    </div>
  );
};

export default CharactersProvider;
