import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CartWidget/style.css';
import { ShoppingCart } from 'feather-icons-react';
import { CartContext } from '../CartContext/CartContext';

function CartWidget() {
    const { cartQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <div className="CartWidget" onClick={handleClick}>
            <ShoppingCart size="40" />
            {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
        </div>
    );
}

export default CartWidget;