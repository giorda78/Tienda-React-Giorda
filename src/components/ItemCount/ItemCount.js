import React, {useState} from 'react'

import './ItemCount.css'

const Item = ({stock, initial, onAdd}) => {

    // const onAdd = () => {
    //     alert('¡Agregado al carrito con exito!' );
    //   };
    
    // const [clicks, setClicks] = useState(1)

    // console.log(stock)

    // const addClick = () => {
        
    //     if(clicks < stock ) setClicks (clicks+1)
    // }

    // const removeClick = () => {
    //     if(clicks > 1) setClicks (clicks-1)
    // }

    const [clicks, setClicks] = useState(initial);

    const addClick = (numero) => {
        setClicks(clicks + numero);
    };    

    return (        
        <div>
            <div>
                 
                <button className="btn btn-success m-1 p-2 botones" onClick={()=>addClick(+1)} disabled={clicks === stock ? true : null}>+</button>
                <span>{clicks}</span> 
                <button className="btn btn-danger m-2 p-2 botones" onClick={()=>addClick(-1)} disabled={clicks === initial ? true : null}>-</button>      
            </div>
                <button className="btn btn-primary botones" onClick={()=>onAdd(clicks)} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    );
};
  
 




export default Item
