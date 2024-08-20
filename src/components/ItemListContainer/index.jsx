import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/index';
import { CartContext } from '../CartContext/CartContext';


const fetchItems = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allItems = [
                { id: 1, title: 'Ballantines', category: 'whisky', description: 'Whisky Ballantines', price: 300, pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain', stock: 50 },
                { id: 2, title: 'Blue Label', category: 'whisky', description: 'Whisky Blue Label', price: 500, pictureUrl: 'https://th.bing.com/th/id/OIP.CgwRa91-DAseJMS0A1g9WwHaHa?rs=1&pid=ImgDetMain', stock: 60 },
                { id: 3, title: 'Diplomático', category: 'whisky', description: 'Whisky Diplomático', price: 1000, pictureUrl: 'https://whisky.nl/media/catalog/product/d/i/diplomatico-distillery-collection-no-3-pot-still-70cl.jpg?width=1400&height=1400&store=whisky_nl&image-type=image', stock: 100 },
            ];
            const filteredItems = categoryId ? allItems.filter(item => item.category === categoryId) : allItems;
            resolve(filteredItems);
        }, 2000);
    });
};

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchItems(categoryId).then((data) => {
            setItems(data);
        });
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList items={items} onAddToCart={addToCart} />
        </div>
    );
}

export default ItemListContainer;

