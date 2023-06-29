import React from 'react'
import imgDH from './assets/images/DH.png'
import ico_face from './assets/images/ico-facebook.png'
import ico_insta from './assets/images/ico-instagram.png'
import ico_tiktok from './assets/images/ico-tiktok.png'
import ico_what from './assets/images/ico-whatsapp.png'

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
