import React, {useState} from 'react'
import { useCartContext } from '../CartContext/CartContext';

import './ItemCount.css'

const Item = ({item, initial, onAdd, mostrar , setMostrar}) => {

    const [clicks, setClicks] = useState(initial);

    const addClick = (numero) => {
        setClicks(clicks + numero);
    };    

    const {addItem} = useCartContext()


    const [show, setShow]= useState (true)

    return (        
        <div>  
            <div>
                <button className="btn btn-success m-1 p-2 botones" onClick={()=>addClick(+1)} disabled={clicks === item.stock ? true : null}>+</button>
                <span className="botones" >{clicks}</span> 
                <button className="btn btn-danger m-2 p-2 botones" onClick={()=>addClick(-1)} disabled={clicks === initial ? true : null}>-</button>    
            </div>

            {show?
            <div> 
                <button className="btn btn-primary botones" onClick={()=>addItem(item, clicks, mostrar, setMostrar)} disabled={item.stock === 0 ? true : null}>Agregar al carrito</button>
            </div>
            :null}   
    
        </div>
    );
};
  
 




export default Item
