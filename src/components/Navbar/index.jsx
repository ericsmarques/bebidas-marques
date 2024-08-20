import { Link } from 'react-router-dom';
import "./style.css";
import CartWidget from "../CartWidget/index.jsx";

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/whisky">Whisky</Link></li>
                    <li><Link to="/category/vodka">Vodka</Link></li>
                    <li><Link to="/category/gin">Gin</Link></li>
                    <CartWidget />
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;