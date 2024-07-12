import "./style.css";
import CartWidget from "../CartWidget/index.jsx";

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Produtos</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;