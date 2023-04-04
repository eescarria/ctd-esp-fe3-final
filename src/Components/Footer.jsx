import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer>
      <div>
        <button className='botonBack' onClick={() => navigate(-1)}>Volver atrás</button>
      </div>
      
      <div className='powYLogos'>
        <div className='powered'>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>
        <div className='logos'>
          <img src="./images/ico-facebook.png" alt='Facebook-logo' />
          <img src="./images/ico-instagram.png" alt='Instagram-logo' />
          <img src="./images/ico-whatsapp.png" alt='Whatsapp-logo' />
          <img src="./images/ico-tiktok.png" alt='Tiktok-logo' />
        </div>
      </div>      
        
    </footer>
  )
}

export default Footer
