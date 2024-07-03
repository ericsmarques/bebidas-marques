import ItemCount from '../ItemCount/index';

function ItemListContainer({ greeting }) {
    const stock = 5;
    const initial = 1;

    const handleAddToCart = (count) => {
        alert(`Adicionar ${count} itens ao carrinho`);
    };

    return (
        <div className="ItemListContainer">
            <h2> { greeting } </h2>
            <ItemCount stock={stock} initial={initial} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemListContainer;