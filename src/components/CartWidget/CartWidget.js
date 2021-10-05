import React from 'react'
import logo from '../Img/carritoReact.png'

const CartWidget = ({count}) => {
    return (
            <span>
                <img width="35px" src={logo} alt="" />
                <h2>{count}</h2>
            </span>
    )
}

export default CartWidget
