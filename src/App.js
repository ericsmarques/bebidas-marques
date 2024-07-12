import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ItemListContainer greeting="Produtos em estoque. Aproveite as promoções!" />
    </div>
  );
}

export default App;
