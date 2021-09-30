import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/Navbar'

export const Main = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greetings="¡Bienvenido!"/>
        </div>
    )
}

export default Main