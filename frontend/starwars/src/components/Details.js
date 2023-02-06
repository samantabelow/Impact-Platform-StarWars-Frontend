import { useContext } from "react";
import CharactersContext from "../context/CharactersContext";
import { useParams } from "react-router-dom";

const Details = ({ location }) => {
  const { characterName } = useParams();
  const { characters } = useContext(CharactersContext);
  const character = characters.find((char) => char.name === characterName);
  console.log(character);

  return <div>{characterName}</div>;
};

export default Details;
