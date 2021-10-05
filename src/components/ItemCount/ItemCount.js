import React, {useState} from 'react'

const Item = ({stock, name, price, image}) => {

    const onAdd = () => {
        alert('¡Agregado al carrito con exito!' );
      };
    
    const [clicks, setClicks] = useState(1)

    console.log(stock)

    const addClick = () => {
        
        if(clicks < stock ) setClicks (clicks+1)
    }

    const removeClick = () => {
        if(clicks > 1) setClicks (clicks-1)
    }


    return (
        <div className="container-fluid col-lg-4">
           <div className="text-center card">
                <img  src={image} className="card-img" alt="img del producto"/>
                <div className="card-body">
                    <h2 className="card-text p-3">{name}</h2>
                    <h3 className="card-text p-2">${price}</h3>

                     <h1>{clicks}</h1>
                    <div className="container-fluid">
                        <button className="btn btn-primary m-1" onClick={()=>addClick()}>Sumar</button>
                        <button className="btn btn-danger m-2" onClick={()=>removeClick()}>Restar</button>
                    </div>
                    

                    <button className="btn btn-success m-2" onClick={()=>onAdd()}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Item
