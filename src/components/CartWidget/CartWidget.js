import React from 'react'
import logo from '../Img/carritoReact.png'

const CartWidget = ({count}) => {
    return (
            <span>
                
                <img width="35px" src={logo} alt="" />
                <p>carrito</p>
                <p> {count} </p>
            </span>
    )
}

export default CartWidget
