import '../CartWidget/style.css'
import { ShoppingCart } from 'feather-icons-react';

function CartWidget() {
    return (
        <div className="CartWidget">
            <ShoppingCart size="60"/>
            <span>3</span>
        </div>
    );
}

export default CartWidget;