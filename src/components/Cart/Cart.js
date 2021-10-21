import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'



const Cart = () => {

    const {cartList, vaciarCarrito} = useCartContext()

    return (
        <div className="text-center">
            <h1 className="p-4">Carrito fachero</h1>

            {cartList.map(item => 
            <div className="text-center" key={item.item.id}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="m-1 ">Cantidad</th>
                                <th className="m-1 ">Nombre</th>
                                <th className="m-1 ">Precio</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><h2 className="m-3 ">1</h2></th>
                                <td><h2 className="m-3 ">{item.item.nombre}</h2></td>
                                <td><h2 className="m-3 "> ${item.item.precio}</h2></td>
                            </tr>
                        </tbody>
                    </table>
            </div>)}

            <button onClick={()=> vaciarCarrito()} className="p-4 m-2 btn btn-success">Vaciar</button>
            <h2 className="p-4">¿Te quedaste con hambre?</h2>
            <Link to={`/productos`} ><button className="p-4 m-2 btn btn-success">Volver a productos :)</button></Link>
        </div>
    )
}

export default Cart
