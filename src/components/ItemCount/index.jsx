import { useState } from 'react';
import './style.css';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrease = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div className="item-count">
            <div className="controls">
                <button className="btn" onClick={handleDecrease} disabled={count <= 1}>-</button>
                <span className="count">{count}</span>
                <button className="btn" onClick={handleIncrease} disabled={count >= stock}>+</button>
            </div>
            <button className="btn btn-primary" onClick={handleAddToCart}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}

export default ItemCount;