import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Result() {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/')
  }

  const location = useLocation();
  const {data} = location.state
  console.log(data);
  return (
    <>
        <div style={{height:"100vh"}} className=" d-flex justify-content-center align-items-center mm text-white">
            <div style={{width:'700px',height:'400px'}} className='cc dd d-flex flex-column justify-content-center align-items-center'>
              <h1 style={{fontFamily:"sans-serif"}}>YOU HAVE SCORED</h1>
              <h1 style={{fontSize:"70px",fontWeight:"800",color:"yellow"}}>{data}</h1>
              <button onClick={handleClick} className='btn btn-success'>Back to Home</button>
            </div>
        </div>
    </>
  )
}

export default Result