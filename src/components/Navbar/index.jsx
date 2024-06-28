import "./style.css";
import CartWidget from "../CartWidget/index.jsx";

function Navbar() {
    return (
        <div className="Navbar">
            <h1>Loja de Bebidas</h1>

            <nav>
                <li><a target="_blank" href="https://www.linkedin.com" rel="noreferrer"> Sobre (loja exemplo)</a></li>
                <li><a target="_blank" href="https://www.mundodasbebidas.com.br/" rel="noreferrer"> Consulte nossos produtos</a></li>
            </nav>

            <CartWidget />

        </div>
    );
}

export default Navbar;