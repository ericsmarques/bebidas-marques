import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import ItemDetailContainer from '../ItemDetailContainer';

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Ballantines', description: 'Whisky Ballantines', price: 300, pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain', stock: 5 },
                { id: 2, title: 'Blue Label', description: 'Whisky Blue Label', price: 500, pictureUrl: 'https://th.bing.com/th/id/OIP.CgwRa91-DAseJMS0A1g9WwHaHa?rs=1&pid=ImgDetMain', stock: 3 },
                { id: 3, title: 'Diplomático', description: 'Whisky Diplomático', price: 1000, pictureUrl: 'https://whisky.nl/media/catalog/product/d/i/diplomatico-distillery-collection-no-3-pot-still-70cl.jpg?width=1400&height=1400&store=whisky_nl&image-type=image', stock: 2 },
            ]);
        }, 2000);
    });
};

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchItems().then((data) => {
            setItems(data);
        });
    }, []);

    const handleAddToCart = (id, count) => {
        const item = items.find(item => item.id === id);
        setSelectedItem({ ...item, count });
    };

    const handleShowDetail = (id) => {
        const item = items.find(item => item.id === id);
        setSelectedItem(item);
    };

    return (
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList items={items} onAddToCart={handleAddToCart} onShowDetail={handleShowDetail} />
            {selectedItem && <ItemDetailContainer itemId={selectedItem.id} count={selectedItem.count} />}
        </div>
    );
}

export default ItemListContainer;


