
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Item/style.css';
import ItemCount from '../ItemCount/index';

function Item({ item, onAddToCart }) {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        onAddToCart(item.id, count);
    };

    return (
        <div className="Item">
            <img src={item.pictureUrl} alt={item.title} />
            <Link to={`/item/${item.id}`}>
                <h3 style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    {item.title}
                </h3>
            </Link>
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={setCount} />
            <button onClick={handleAdd} disabled={count > item.stock}>Adicionar ao carrinho</button>
        </div>
    );
}

export default Item;