import Item from '../Item/index';
import './style.css';

function ItemList({ items, onAddToCart }) {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ItemList;