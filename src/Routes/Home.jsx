import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const[dentList, setDentList] = useState([])

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() =>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentList(data))
  })


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