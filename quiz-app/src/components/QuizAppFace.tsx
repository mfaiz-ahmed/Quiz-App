import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';
import 'animate.css';



const questions = [
    {
        question:'HTML Stands for' ,
        options:['Hypertext Markup Language' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'Hypertext Markup Language'
    },
    {
        question:'CSS Stands for' ,
        options:['Cascading Style Sheet' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        question:'JS Stands for' ,
        options:['JavaScript' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'JavaScript'
    },
    {
        question:'RAM Stands for' ,
        options:['Random Access Memory' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'Random Access Memory'
    },
    {
        question:'ROM Stands for' ,
        options:['Read Only Memory' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'Read Only Memory'
    },
    {
        question:'CPU Stands for' ,
        options:['Central Processing Unit' , 'incorrect' , 'incorrect' , 'incorrect'],
        correctAnswer: 'Central Processing Unit'
    },
]
  
  

export default function QuizAppFace() {

    const [index , setIndex] = useState(0);
    const[marks , setMarks] = useState(0);

    const checkAnswer = (a:any , b:any)=>{
        if(a == b){
            setMarks(marks + 1)
            setIndex(index + 1)
        }
        if(index+1 == questions.length){
            Swal.fire({
                title: `Quiz is completed and your total score is ${marks}`,
                showClass: {
                  popup: `
                    animate__animated
                    animate__slideInLeft
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__slideOutRight  
                    animate__faster
                  `
                }
              });
            setIndex(0)
            setMarks(0)
        }
        else{
            setIndex(index + 1)
        }
    }


    const skipButton = ()=>{
        setIndex(index+1)
        if(index + 1 === questions.length){
            Swal.fire({
                title: `Quiz is completed and your total score is ${marks}`,
                showClass: {
                  popup: `
                    animate__animated
                    animate__slideInLeft
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__slideOutRight  
                    animate__faster
                  `
                }
              });
            setIndex(0)
            setMarks(0)
        }
    }

    const backButton = ()=>{
        setIndex(index-1)
        if(index===0){
            Swal.fire({
                icon: "error",
                title: 'There are no questions at the back...',
                showClass: {
                  popup: `
                    animate__animated
                    animate__slideInLeft
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__slideOutRight  
                    animate__faster
                  `
                }
              });
            setIndex(0)
            setMarks(0)

        }
    }

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>QUIZ</h1>
        <p className='text-end mt-5'>Ques:{index+1}/{questions.length}</p>
        <h3>Question({index+1}): {questions[index].question}</h3>
        <div className='d-flex justify-content-center mt-5 gap-3'>
            {questions[index].options.map((x:any , i:number)=>{
                return <button onClick={()=>checkAnswer(x ,questions[index].correctAnswer )} className='btn btn-primary w-100' key={i}>{x}</button>
            })}
        </div>
        <button onClick={skipButton} className="btn btn-danger mt-5">Skip</button>
        <button onClick={backButton} className="btn btn-success mt-5 ms-5">Back</button>
    </div>
    
  )
}
