import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Minha lista" />
    </div>
  );
}

export default App;
