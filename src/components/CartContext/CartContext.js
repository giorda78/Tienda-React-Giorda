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
 
    // const removerItem = (id) =>{
    //     let filtrarCarrito = cartList.filter((item) => {
    //         return item["id"] !== id;
    //     });
    //     setCartList(filtrarCarrito);
    //     return filtrarCarrito;
    // };

    const removeItem = (itemId) => {
        const newCarrito = cartList.filter ((e) => e.item.id !== itemId);
        setCartList (newCarrito);
    };
    
    return(
        <CartContext.Provider value= {{
            cartList,
            agregarItem,
            vaciarCarrito,
            addItem,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
