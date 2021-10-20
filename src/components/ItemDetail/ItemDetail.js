import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  const onAdd = (clicks) => {
    alert(`Agregaste ${clicks} ${item.nombre} al carrito al carrito`);
};



const [show, setShow]= useState (true)

    return (
      <div className="card text-center d-flex" style={{width:"18rem"}}>
          <img className="card-img-top" src={item.imagen} alt="producto"/>
            <div className="card-body">
              <h5 className="card-title botones">{item.nombre}</h5>
              <p className="card-text botones">${item.precio}</p>
              <p className="card-text botones">{item.descripcion}</p>

              {show?<ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>:null}
              
              <button className="btn btn-secondary botones p-3 m-3" onClick={()=>setShow(!show)}>FINALIZAR COMPRA</button> 

            </div>
      </div> 
    );
};
export default ItemDetail;