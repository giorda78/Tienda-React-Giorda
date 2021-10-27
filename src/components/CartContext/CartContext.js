import React from 'react'
import {createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const agregarItem=(item)=>{
        setCartList([...cartList, item])
    }

    function vaciarCarrito(){
        setCartList([])
    }

    const addItem = (newItem, newQuantity, mostrar, setMostrar) => {
        const prevCartItem = cartList.find((e) => e.item.id === newItem.id);
        let newCart;
        let qty;
        if (prevCartItem) {
            newCart= cartList.filter((e) => e.item.id !== newItem.id);
            qty= prevCartItem.quantity + newQuantity
        } else {
            newCart = [...cartList];
            qty = newQuantity
        }
        setCartList ([...newCart, { item: newItem, quantity: qty }]);
        setMostrar(!mostrar);
    };

    console.log(cartList);
    return(
        <CartContext.Provider value= {{
            cartList,
            agregarItem,
            vaciarCarrito,
            addItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
