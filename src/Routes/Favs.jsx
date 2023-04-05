import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
    
  const {favState, favDispatch} = useContextGlobal()

  const resetFavs = () =>{
    favDispatch({type: 'RESET', payload: localStorage.clear()})
  }

  return (
    <><div className="favs">
        <h1>Dentists Favs</h1>
        <div className="card-grid">
        {favState.map((fav,index) => (
          <Card key ={index} dentist={fav}/>))}
                
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
        {(favState.length > 0) && 
        <button className="reset" onClick={resetFavs}>Reset Favs</button>}

    </div>
      
    </>
  );
};

export default Favs;
