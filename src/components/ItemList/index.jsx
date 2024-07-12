import Item from '../Item';

function ItemList({ items, onAddToCart, onShowDetail }) {
    return (
        <div className="ItemList">
            {items.map((item) => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onAddToCart={onAddToCart} 
                    onShowDetail={onShowDetail} 
                />
            ))}
        </div>
    );
}

export default ItemList;
