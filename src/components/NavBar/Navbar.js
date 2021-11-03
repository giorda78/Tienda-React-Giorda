import React from 'react'
import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
    return (
      <div>
        <Link to={`/`}> <div className="miTienda text-center p-3">Comida Rapida</div></Link>
       
        <ul className="nav justify-content-center bg-light m-3 p-4">
          
          <li className="nav-item">
          <Link to={`/`}><a className="nav-link active" aria-current="page" href="#">Inicio</a></Link>  
          </li>

         

          <li className="nav-item">
          <Link to={`/cart`}> <a className="nav-link text-center" href="#"><CartWidget/></a></Link>          
          </li>   

        </ul>

        
        
      </div>
    )
}

export default Navbar