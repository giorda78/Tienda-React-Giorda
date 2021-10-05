import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greetings="¡Bienvenido!"/>
            <ItemCount
            name="chori clasico"
            image="https://pbs.twimg.com/media/ETHHMMgX0AUoHXR.jpg"
            price={250}
            stock={5}/>
            <ItemCount
            name="hamburguesa"
            image="https://www.noticiasformosa.com.ar/wp-content/uploads/2021/06/Hamburguesas.jpg"
            price={230}
            stock={8}/>
            
        </div>
    )
}

export default Main