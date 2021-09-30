import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
    return (
      <div>
        <div className="miTienda text-center p-3">Mi Tienda</div>

        <a class="nav-link text-center" href="#"> <CartWidget/> 0 </a> 

        <ul class="nav justify-content-center bg-dark m-3 p-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Sobre nosotros</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
              
        </ul>
        
      </div>
    )
}

export default Navbar