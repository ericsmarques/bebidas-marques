import '../ItemDetail/style.css';

function ItemDetail({ item }) {
    return (
        <div className="ItemDetail">
            <img src={item.pictureUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>
            <p>Quantidade: {item.count}</p>
        </div>
    );
}

export default ItemDetail;
