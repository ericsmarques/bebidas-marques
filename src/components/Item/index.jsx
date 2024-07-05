import React, { useState } from 'react';
import './style.css';

function Item({ item, onAddToCart }) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count <= item.stock) {
      onAddToCart(item, count);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{formatPrice(item.price)}</p>
      <div className="item-count">
        <div className="controls">
          <button className="btn" onClick={handleDecrease} disabled={count <= 1}>-</button>
          <span className="count">{count}</span>
          <button className="btn" onClick={handleIncrease} disabled={count >= item.stock}>+</button>
        </div>
        <button className="btn add-btn" onClick={handleAdd} disabled={item.stock === 0}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default Item;