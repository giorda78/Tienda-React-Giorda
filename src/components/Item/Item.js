import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({id, nombre, precio, stock, imagen}) => {

    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito`);
    };

    return (
       
            <div className="">
                <div className="text-center card">
                    <div className="card">
                        <img className="card-img" src={imagen} width="300px" height="600px" alt="producto"/>
                        <div className="">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">${precio}</p>
                            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>                        
                        </div>
                    </div>
                </div>
            </div>    
        
    )
}


export default Item
