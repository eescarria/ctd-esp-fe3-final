import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const [dentist, setDentist] = useState({})

    const { id } = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const getDentist = async()=>{

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    setDentist(data)
}

useEffect(()=>{
    getDentist()
}, [])
  return (
    <>
      <h1>Detail Dentist id {id} </h1>
      <div className='contenedorDetail'>
        <div className='cardDetail'>
          <span className='leyenda'>Name</span>
          <span>{dentist.name}</span>        
        </div>
        <div className='cardDetail'>
          <span className='leyenda'>Email</span>
          <span>{dentist.email}</span>        
        </div>
        <div className='cardDetail'>
          <span className='leyenda'>Phone</span>
          <span>{dentist.phone}</span>        
        </div>
        <div className='cardDetail'>
          <span className='leyenda'>Website</span>
          <span>{dentist.website}</span>        
        </div>
      </div>
      
            
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail