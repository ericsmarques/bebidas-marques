import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/index';
import ItemList from '../ItemList/index';
import './style.css'
import '../Item/style.css'
import '../ItemList/style.css'

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const stock = 5;
    const initial = 1;

    const handleAddToCart = (count) => {
        alert(`Adicionar ${count} itens ao carrinho`);
    };

    useEffect(() => {
        const fetchItems = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { id: 1, title: 'Produto 1', description: 'Descrição do produto 1', price: 100, pictureUrl: 'https://via.placeholder.com/150' },
                { id: 2, title: 'Produto 2', description: 'Descrição do produto 2', price: 200, pictureUrl: 'https://via.placeholder.com/150' },
                { id: 3, title: 'Produto 3', description: 'Descrição do produto 3', price: 300, pictureUrl: 'https://via.placeholder.com/150' },
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
            <h2> { greeting } </h2>
            {loading ? <p>Carregando...</p> : <ItemList items={items} />}
            <ItemCount stock={stock} initial={initial} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemListContainer;