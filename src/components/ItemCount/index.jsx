import { useState } from 'react';
import '../ItemCount/style.css';

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
  
    const handleAdd = () => {
      if (count <= stock) {
        onAdd(count);
      }
    };
  
    return (
      <div className="item-count">
        <div className="controls">
          <button className="btn" onClick={handleDecrease} disabled={count <= 1}>-</button>
          <span className="count">{count}</span>
          <button className="btn" onClick={handleIncrease} disabled={count >= stock}>+</button>
        </div>
        <button className="btn add-btn" onClick={handleAdd} disabled={stock === 0}>Adicionar ao carrinho</button>
      </div>
    );
}
  
export default ItemCount;
