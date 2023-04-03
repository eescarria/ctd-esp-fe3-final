import React, { useState } from "react";
import './Form.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    nombre : "",
    email : ""
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    
    
    if(emailTest && user.nombre.length >= 5) {
      setShow(true)
      setErr(false)
    }else{
      setErr(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input type="text" value = {user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value = {user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        </div>

        <button>Send</button>
                 
      </form>
      
      <div className='error'>
          {err && 'Por favor verifique su información nuevamente'}  
        </div>
      {show && <h3>Gracias {user.nombre}, te contactaremos cuanto antes vía mail </h3>}
    </div>
  );
};

export default Form;
