import React from 'react'
import Itemlist from '../ItemList/Itemlist'

const ItemListContainer = ( {greetings} ) => {
    return (
        <div>
            <h2 className="text-center p-2"> {greetings} </h2>
            <Itemlist/>
        </div>
    )
}

export default ItemListContainer
