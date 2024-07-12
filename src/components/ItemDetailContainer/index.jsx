import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';

const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const items = [
                { id: 1, title: 'Ballantines', description: 'Whisky Ballantines, 12 anos. Bebida que irei complementar a descrição. Por hora é apenas para completar o desafio.', price: 300, pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain' },
                { id: 2, title: 'Blue Label', description: 'Whisky Blue Label, bebida premium.', price: 500, pictureUrl: 'https://th.bing.com/th/id/OIP.CgwRa91-DAseJMS0A1g9WwHaHa?rs=1&pid=ImgDetMain' },
                { id: 3, title: 'Diplomático', description: 'Whisky Diplomático, bebida exclusiva.', price: 1000, pictureUrl: 'https://whisky.nl/media/catalog/product/d/i/diplomatico-distillery-collection-no-3-pot-still-70cl.jpg?width=1400&height=1400&store=whisky_nl&image-type=image' },
            ];
            const item = items.find((item) => item.id === id);
            resolve(item);
        }, 2000);
    });
};

function ItemDetailContainer({ itemId, count }) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(itemId).then((data) => {
            setItem(data);
        });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {item ? <ItemDetail item={{ ...item, count }} /> : <p>Carregando...</p>}
        </div>
    );
}

export default ItemDetailContainer;

