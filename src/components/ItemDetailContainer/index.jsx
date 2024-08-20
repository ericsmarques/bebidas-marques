import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/index';

const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const items = [
                { id: 1, title: 'Ballantines', description: 'Whisky Ballantines', price: 300, pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain', stock: 50 },
                { id: 2, title: 'Blue Label', description: 'Whisky Blue Label', price: 500, pictureUrl: 'https://th.bing.com/th/id/OIP.CgwRa91-DAseJMS0A1g9WwHaHa?rs=1&pid=ImgDetMain', stock: 60 },
                { id: 3, title: 'Diplomático', description: 'Whisky Diplomático', price: 1000, pictureUrl: 'https://whisky.nl/media/catalog/product/d/i/diplomatico-distillery-collection-no-3-pot-still-70cl.jpg?width=1400&height=1400&store=whisky_nl&image-type=image', stock: 100 },
            ];
            const item = items.find((item) => item.id === parseInt(id));
            resolve(item);
        }, 2000);
    });
};

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(itemId).then((data) => {
            setItem(data);
        });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
        </div>
    );
}

export default ItemDetailContainer;

