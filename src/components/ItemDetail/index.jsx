import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { CartContext } from '../CartContext/CartContext';
import './style.css';

function ItemDetail({ item }) {
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const navigate = useNavigate();
    const { setCartItems } = useContext(CartContext);

    const handleAdd = (quantity) => {
        setQuantityToAdd(quantity);

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    const handleCheckout = () => {
        navigate('/cart');
    };

    return (
        <div className="ItemDetail">
            <img src={item.pictureUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>

            {quantityToAdd > 0 ? (
                <button onClick={handleCheckout} className="btn btn-primary">
                    Finalizar Compra
                </button>
            ) : (
                <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
            )}
        </div>
    );
}

export default ItemDetail;