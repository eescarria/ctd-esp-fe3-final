import { useContextGlobal } from "./utils/global.context";
import { Link } from 'react-router-dom'




const Card = ({dentist}) => {

  const {favDispatch} = useContextGlobal()
    
  
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
      favDispatch({type: 'ADD_FAV', payload: dentist})
        
  }

    
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link key={dentist.id} to={"/detail/"+ dentist.id}>
          <div>
            <img src=".\images\doctor.jpg" alt="Foto Doctor" />
            <p>ID: {dentist.id}</p>
            <p>{dentist.name}</p>
            <p>{dentist.username}</p>
          </div>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={addFav} className="favButton">⭐</button>
        
    </div>
  );
};

export default Card;
