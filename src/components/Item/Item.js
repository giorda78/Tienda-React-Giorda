import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const Item = ({id, nombre, precio, stock, imagen}) => {

    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito`);
    };

    return (
     
    <div className="card-container">
        <img src={imagen} alt={nombre} style={{width:"300px"}}/>
        <div className="description text-center">
            <h2 className="p-2">{nombre}</h2>
             <h3>Precio: ${precio}</h3>
            <ul>
                <li><ItemCount stock={stock} onAdd={onAdd} initial={1}/></li>
            </ul>
        </div>
    </div>
        
    )
}


export default Item
