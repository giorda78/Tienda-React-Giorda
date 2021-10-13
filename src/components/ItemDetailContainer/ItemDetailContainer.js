import React, { useEffect, useState } from 'react';
import { getProductById } from '../../Helpers/GetData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id, setProduct);
    console.log(product);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <h2 className="text-center">Cargando productos...</h2>}
    </section>
  );
};

export default ItemDetailContainer;
