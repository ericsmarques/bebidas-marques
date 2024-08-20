import Item from '../Item';
import './style.css';

function ItemList({ items, onAddToCart }) {
    return (
        <div className="ItemList">
            {items.map((item) => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    );
}

export default ItemList;
