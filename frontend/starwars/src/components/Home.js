import { useState, useEffect } from "react";
import getCharacters from "../fetchCharacters";
import Card from "./Card";

const Home = () => {
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
      {characters &&
        characters.length > 0 &&
        characters.map((char) => <Card char={char} key={char.name} />)}
    </div>
  );
};

export default Home;
