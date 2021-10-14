import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
    return (
      <div>
        <div className="miTienda text-center p-3">Comida Rapida</div>

        <ul className="nav justify-content-center bg-light m-3 p-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#"> <CartWidget count={0}/></a> 
          </li>   
        </ul>

        
        
      </div>
    )
}

export default Navbar