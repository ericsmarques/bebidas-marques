import React, { useState } from 'react';
import '../Item/style.css';
import ItemCount from '../ItemCount';

function Item({ item, onAddToCart, onShowDetail }) {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        onAddToCart(item.id, count);
    };

    return (
        <div className="Item">
            <img src={item.pictureUrl} alt={item.title} />
            <h3 onClick={() => onShowDetail(item.id)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                {item.title}
            </h3>
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={setCount} />
            <button onClick={handleAdd} disabled={count > item.stock}>Resumo do carrinho</button>
        </div>
    );
}

export default Item;
