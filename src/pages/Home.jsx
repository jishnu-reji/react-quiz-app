import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/quiz')
  }

  return (
    <>
        <div style={{height:"100vh"}} className=" d-flex justify-content-center align-items-center mm">
            <div style={{width:'700px',height:'400px'}} className='cc dd d-flex flex-column justify-content-center align-items-center'>
              <h1 className='text-white' style={{fontSize:"60px",fontWeight:"800"}}><i class="fa-solid fa-pen-nib text-warning me-3"></i>QUIZ APP</h1>
              <button onClick={handleClick} className='btn btn-success mt-2'>Start Quiz</button>
            </div>
        </div>
    </>
  )
}

export default Home