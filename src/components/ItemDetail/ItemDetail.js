import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ( {item}) => {
  return (

    <div className="card-container">
        <img src={item.imagen} alt={item.nombre} style={{width:"300px"}}/>
        <div className="description text-center">
            <h2>{item.nombre}</h2>
            <h3>Precio: ${item.precio}</h3>
            <h5 className="p-2">{item.descripcion}</h5>
            <ul>
                <li></li>
                <li><ItemCount stock={item.stock} initial={1} /></li>
            </ul>
        </div>
    </div>

    
  );
};

export default ItemDetail;
