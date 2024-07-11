import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar/index"
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Minha lista" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
