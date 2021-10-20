import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const Item = ({id, nombre, precio, stock, imagen}) => {

    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito`);
    };

    return (
     
    <div className="news-cards">

        <div className="card-container">
            <img src={imagen} alt={nombre} style={{width:"300px"}}/>
            <div className="description text-center">
                <Link to={`/productos/${nombre}`}>  <button className="p-4 m-2 btn btn-success">Comprar {nombre}</button>   </Link>
                <h3>Precio: ${precio}</h3>
                <ul>
                    <li><ItemCount stock={stock} onAdd={onAdd} initial={1}/></li>
                </ul>
            </div>
        </div>

        
        
    </div>    
    )
}


export default Item
