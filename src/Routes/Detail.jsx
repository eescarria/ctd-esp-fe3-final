import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    const [dentist, setDentist] = useState({})

    const { id } = useParams()
    
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => setDentist(data))
  }, [])
  
  return (
    <>
      <h1>Detail Dentist id {id} </h1>
      <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </tbody>
      </table>
      
      
            
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail