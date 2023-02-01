import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:characterName" element={<Details />} />
    </Routes>
  );
};

export default App;
