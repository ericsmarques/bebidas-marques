import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Cart from './components/Cart/index';
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Produtos em estoque. Aproveite as promoções!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;