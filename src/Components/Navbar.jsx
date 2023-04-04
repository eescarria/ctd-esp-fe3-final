import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img src="./DH.ico" alt="" />
      <div>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
        <Link to="/detail"><h3>Detail</h3></Link>
        <Link to="/favs"><h3>Favs</h3></Link>
        <button>Change theme</button>
      </div>      
    </nav>
  )
}

export default Navbar