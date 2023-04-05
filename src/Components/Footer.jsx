import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer>
      <div>
        <button className='botonBack' onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
      <div className='powYLogos'>
        <div className='powered'>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>
        <div className='logos'>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiOutlineWhatsApp />
          <FaTiktok />
        </div>
      </div>      
        
    </footer>
  )
}

export default Footer
