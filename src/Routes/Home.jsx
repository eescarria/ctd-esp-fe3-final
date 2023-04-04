import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {dentList} = useContextGlobal()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentList.length && dentList.map(dentist => 
        (<Link key={dentist.id} to={'/detail/' + dentist.id}><Card dentist={dentist} /></Link>))
        }
      </div>
    </main>
  )
}

export default Home