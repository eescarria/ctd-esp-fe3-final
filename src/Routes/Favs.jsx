import React, { useReducer, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const favRecovered = localStorage.getItem("favs")
  let parsedFavs = JSON.parse(favRecovered) || []
  console.log(parsedFavs)
  //const [fav, setFav] = useState(JSON.parse(favRecovered))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {parsedFavs.map((fav,index) => (
          <Card key ={index} dentist={fav.dentist}/>))}
                
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
