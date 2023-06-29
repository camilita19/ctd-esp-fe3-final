import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import sunSvg from '../images/Sun.svg'
import moonSvg from '../images/Moon.svg'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
   const {theme, state, dispatch} = useContext(ContextGlobal);

 
   



  return (


    <nav className='navbar'>
     <Link to='/'>Home</Link>
     <Link to='Contact'>Contact</Link>
     <Link to='favs'>Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

     

       <button className=''
       onClick={(()=> dispatch({type: 'CHANGE_THEME', payload: state.theme}))}>
       {state.theme ? <img src={sunSvg} alt="" /> : <img src={moonSvg} alt="" />}
      </button> 
    </nav>
  )
}

export default Navbar