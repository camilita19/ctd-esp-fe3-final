import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const  Params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/`+ Params.id
  
  const [dentist, setDentist] =useState({})


   useEffect(()=>{
    axios(url).then(res =>
        setDentist(res.data[0]))
   },[]);

   console.log(Params)
  return (
    
    <>
       {dentist && (
        <div >
        <section className="dentist-Information">
          <h1>
            <strong>Detail Dentist</strong> {dentist?.name}{" "}
          </h1>
          <div>
            <ul>
              <li>
                <strong>Full Name:</strong> {dentist.name}
              </li>
              <li>
                <strong>Phone:</strong> {dentist.phone}
              </li>
              <li>
                <strong>Website:</strong> {dentist.website}
              </li>
              <li>
                <strong>Email:</strong> {dentist.email}
              </li>
            </ul>
          </div>
        </section>
        </div>
        )

     }
  </>
  )  
}
  

export default Detail