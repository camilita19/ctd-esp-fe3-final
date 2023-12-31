import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Detail from './Detail'
import { ContextGlobal } from '../Components/utils/global.context'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal)

   const url = 'https://jsonplaceholder.typicode.com/users'
   const [user, setUser]= useState([]);
  
    
    useEffect(()=>{
      axios(url).then(res=> setUser(res.data) ) 
   },[])

   
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
         {/* {user && user.map((dentist) => <Card {...dentist} key={dentist.id}/>)} */}
           {state.data.map(dentist => (<Link to={`/dentist/` + Detail.id} key={dentist.id}>
          <Card {...dentist} data={Detail}/></Link>))}  
       
      </div>
    </main>
  )
}

export default Home