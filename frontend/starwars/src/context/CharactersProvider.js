import CharactersContext from "./CharactersContext";
import { useEffect, useState } from "react";
import getInfo from "../utils/fetchInfo";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState();
  const [films, setFilms] = useState();
  const [planets, setPlanets] = useState();
  const [vehicles, setVehicles] = useState();
  const [starships, setStarships] = useState();
  const [species, setSpecies] = useState();

  useEffect(() => {
    const charApiReturn = async () => {
      const result = await getInfo("people");
      setCharacters(result);
    };
    charApiReturn();
    const filmsApiReturn = async () => {
      const result = await getInfo("films");
      setFilms(result);
    };
    filmsApiReturn();
    const planetsApiReturn = async () => {
      const result = await getInfo("planets");
      setPlanets(result);
    };
    planetsApiReturn();
    const vehiclesApiReturn = async () => {
      const result = await getInfo("vehicles");
      setVehicles(result);
    };
    vehiclesApiReturn();
    const starshipsApiReturn = async () => {
      const result = await getInfo("starships");
      setStarships(result);
    };
    starshipsApiReturn();
    const speciesApiReturn = async () => {
      const result = await getInfo("species");
      setSpecies(result);
    };
    speciesApiReturn();
  }, []);

  const value = {
    characters,
    films,
    planets,
    vehicles,
    starships,
    species,
  };

  const conditions = () => {
    return (
      characters &&
      characters.length > 0 &&
      films &&
      films.length > 0 &&
      planets &&
      planets.length > 0 &&
      vehicles &&
      vehicles.length > 0 &&
      starships &&
      starships.length > 0 &&
      species &&
      species.length > 0
    );
  };

  return (
    <div>
      {conditions() && (
        <CharactersContext.Provider value={value}>
          {children}
        </CharactersContext.Provider>
      )}
    </div>
  );
};

export default CharactersProvider;
