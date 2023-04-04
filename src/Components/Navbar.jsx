import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = ()=>{
    if(themeState === 'dark'){
      themeDispatch({type: 'SWITCH_LIGHT'})
    }else{
      themeDispatch({type: 'SWITCH_DARK'})
    }
  }

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
        <button onClick={switchTheme}>{themeState === "dark" ? '🌞':'🌙'}</button>
      </div>      
    </nav>
  )
}

export default Navbar