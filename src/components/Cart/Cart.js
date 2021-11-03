import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'



const Cart = () => {

    const {cartList, vaciarCarrito, removeItem} = useCartContext()
    
    console.log(cartList);

    let i = 0

    return (

        <div className="text-center">
            <h1 className="p-4">Carrito fachero</h1>
            
            
            <div className="text-center">
                    <table className="table">

                        <thead>
                            <tr>
                                <th className="m-1 ">Nombre</th>
                                <th className="m-1 ">Cantidad</th>
                                <th className="m-1 ">Precio por unidad</th>
                                <th className="m-1">Eliminar del carrito</th>
                                
                            </tr>
                        </thead>
                            {cartList.map(item => 
                        <tbody key={item.item.id}>
                            <tr>
                                <td><h2 className="m-3 ">{item.item.nombre}</h2></td>
                                <th><h2 className="m-3 ">{cartList[i].quantity}</h2></th>
                                <td><h2 className="m-3 "> ${item.item.precio}</h2></td>
                                <td><h2><button className="p-1 btn-danger" onClick={()=> removeItem(item.item.id)}>X</button></h2></td>
                            </tr>
                        </tbody>)}

                    </table>
                    {i++}
            </div>

            <button onClick={()=> vaciarCarrito()} className="p-4 m-2 btn btn-success">Vaciar carrito :(</button>
            <h2 className="p-4">¿Te quedaste con hambre?</h2>
            <Link to={`/productos`} ><button className="p-4 m-2 btn btn-success">Volver a productos :)</button></Link>
        </div>
    )
}

export default Cart
