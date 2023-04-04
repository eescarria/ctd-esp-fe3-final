import React, { useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";

const Card = ({dentist}) => {

  let favs = JSON.parse(localStorage.getItem('favs')) || []
  
    
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(favs === []){
      favs = [dentist]
    }else{      
      favs = [...favs, {dentist}]
      
    }
    localStorage.setItem('favs', JSON.stringify(favs))
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src=".\images\doctor.jpg" alt="Foto Doctor" />
        <p>ID: {dentist.id}</p>
        <p>{dentist.name}</p>
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={addFav} className="favButton">⭐</button>
        
    </div>
  );
};

export default Card;
