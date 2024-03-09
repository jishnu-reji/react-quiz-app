import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Quiz() {

  const questions = [
	{
		questionText: 'What is the correct command to create a new React project?',
		answerOptions: [
			{ answerText: 'npm create-react-app', isCorrect: false },
			{ answerText: 'npx create-react-app', isCorrect: false },
			{ answerText: 'npm create-react-app myReactApp', isCorrect: false },
			{ answerText: 'npx create-react-app myReactApp', isCorrect: true },
		],
	},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		
	];

  const [ustnNo,setQstnNo] = useState(0)
  const [point,setPoint] = useState(0)
  const [buttonDisable,setButtonDisable] = useState(false)
  const [nextBtnDisable,setNextBtnDisable] = useState(true)
  const [selectedAns,setSelectedAns] = useState()
  const [correct,setCorrect] = useState()
  console.log(questions[0].questionText);
  console.log(questions[0].answerOptions.map(ans=>ans.answerText));

  const hangleClick = (ans,index) =>{
	setButtonDisable(true)
	setNextBtnDisable(false)
	setSelectedAns(index)
	setCorrect(ans)
	if(ans){
		setPoint(point+5)		
		console.log(point);
	}    
  }

  const navigate = useNavigate()

  const handlePageChange = () =>{
	if(ustnNo<4){
		setQstnNo(ustnNo+1)
		setButtonDisable(false)
		setNextBtnDisable(true)
		setSelectedAns()
		setCorrect()
	}
	else{
		navigate('/result',{state:{data:point}})
	}
	
  }


  return (
    <>
        <div style={{height:"100vh"}} className=" d-flex justify-content-center align-items-center mm">
            <div style={{width:'700px',height:'400px'}} className='cc p-4 text-white d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-between align-items-center'>
              	<h4 className='mb-2'><span style={{color:"yellow",fontSize:"40px"}}>{ustnNo+1}</span>/5</h4>
				<h3>Points : <span style={{fontSize:"40px",color:"greenyellow"}}>{point}</span></h3>
              </div>
              <h3 className='mb-4'>{questions[ustnNo].questionText}</h3>
              <div className='row'>
                {questions[ustnNo].answerOptions.map((ans,index)=>
                <div key={index} className='col-lg-6'><button id={index} onClick={()=>hangleClick(ans.isCorrect,index)} style={{backgroundColor:selectedAns===index?(correct?"green":"red"):"white"}} disabled={buttonDisable} className='btn btn-light w-100 mb-2 p-3'>{ans.answerText}</button></div>
                  )}
              </div>
              <button onClick={handlePageChange} disabled={nextBtnDisable} className='btn btn-success p-3 mt-2'>Next</button>
            </div>
        </div>
    </>
  )
}

export default Quiz