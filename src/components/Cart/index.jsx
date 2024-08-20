import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './style.css';

function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const handleQuantityChange = (itemId, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId 
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        ));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="Cart">
            <h2>Carrinho de Compras</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.pictureUrl} alt={item.title} />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>Preço Unitário: R$ {item.price.toFixed(2)}</p>
                                <p className="cart-item-summary">
                                    Total: R$ {(item.price * item.quantity).toFixed(2)}
                                </p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <p>Total: R$ {total.toFixed(2)}</p>
                    <button onClick={handleClearCart} className="clear-cart-button">Esvaziar Carrinho</button>
                    <button className="checkout-button">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
}

export default Cart;