import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/index';
import './style.css'
import '../Item/style.css'
import '../ItemList/style.css'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (item, count) => {
    console.log(`Adicionar ${count} ${item.title} ao carrinho`);
  };

  useEffect(() => {
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Ballantines', description: 'Whisky Ballantines', price: 300, stock: 5, pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain' },
            { id: 2, title: 'Blue Label', description: 'Whisky Blue Label', price: 500, stock: 3, pictureUrl: 'https://th.bing.com/th/id/OIP.CgwRa91-DAseJMS0A1g9WwHaHa?rs=1&pid=ImgDetMain' },
            { id: 3, title: 'Diplomático', description: 'Whisky Diplomático', price: 1000, stock: 2, pictureUrl: 'https://whisky.nl/media/catalog/product/d/i/diplomatico-distillery-collection-no-3-pot-still-70cl.jpg?width=1400&height=1400&store=whisky_nl&image-type=image' },
          ]);
        }, 2000);
      });
    };

    fetchItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="ItemListContainer">
      <h2>{greeting}</h2>
      {loading ? <p>Carregando...</p> : <ItemList items={items} onAddToCart={handleAddToCart} />}
    </div>
  );
}

export default ItemListContainer;