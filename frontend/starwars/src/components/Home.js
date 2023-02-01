import { useContext } from "react";
import CharactersContext from "../context/CharactersContext";
import Card from "./Card";

const Home = () => {
  const characters = useContext(CharactersContext);
  return (
    <div>
      {characters.map((char) => (
        <Card char={char} key={char.name} />
      ))}
    </div>
  );
};

export default Home;
