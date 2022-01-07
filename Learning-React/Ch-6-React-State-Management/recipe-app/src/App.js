import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import data from "./data/recipes.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Menu recipes={data} />
    </div>
  );
}

export default App;
