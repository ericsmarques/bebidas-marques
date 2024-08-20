import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const clearCart = () => {
        setCartItems([]);
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => 
                item.id === itemId ? { ...item, quantity } : item
            );
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, cartQuantity, clearCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};