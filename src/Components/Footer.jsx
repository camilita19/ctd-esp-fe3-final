import React from 'react'
import imgDH from '../images/DH.png'
import ico_face from '../images/ico-facebook.png'
import ico_insta from '../images/ico-instagram.png'
import ico_tiktok from '../images/ico-tiktok.png'
import ico_what from '../images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer >
      <div className='contenedor-footer'>
        <p className='powered'>Powered by</p>
        {/* <div className='footer_logo'>
        <img src={imgDH} alt='DH-logo' />
        </div> */}
{/* 
          <div className='social-networks'>
               <img
                  className='img'
                  src={ico_face}
                  alt="facebook"/>
                <img className='img'
                  src={ico_insta}
                  alt="instagram"/>
                <img className='img'
                  src={ico_what}
                  alt="whatsapp"/>
                <img className='img'
                  src={ico_tiktok}
                  alt="tiktok"/>
              </div>  */}
      </div>  
    </footer>
  )
}

export default Footer
