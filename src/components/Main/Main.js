import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greetings="¡Bienvenido!"/>
            
        </div>
    )
}

export default Main