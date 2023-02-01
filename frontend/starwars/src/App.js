import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import CharactersProvider from "./context/CharactersProvider";

const App = () => {
  return (
    <CharactersProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:characterName" element={<Details />} />
      </Routes>
    </CharactersProvider>
  );
};

export default App;
