import './App.css';
import Header from './components/Header';

import PokemonList from "./components/Poke-List-Container";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <PokemonList></PokemonList>
    </div>
  );
}

export default App;
