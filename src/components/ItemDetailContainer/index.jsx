import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Ballantines',
        description: 'Whisky Ballantines, 12 anos. Bebida que irei complementar a descrição. Por hora é apenas para completar o desafio.',
        price: 300,
        pictureUrl: 'https://th.bing.com/th/id/OIP.mPZMhsqe5cjardMikcY2TAHaHa?rs=1&pid=ImgDetMain'
      });
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
}

export default ItemDetailContainer;