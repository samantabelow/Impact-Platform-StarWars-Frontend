import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home";

const App = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
