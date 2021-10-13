import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greetings="¡Bienvenido!"/>
            <ItemDetailContainer id={1}/>
        </div>
    )
}

export default Main