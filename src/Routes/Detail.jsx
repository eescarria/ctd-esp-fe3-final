import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'


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
      <Card dentist={dentist}/>
      {dentist.email}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail