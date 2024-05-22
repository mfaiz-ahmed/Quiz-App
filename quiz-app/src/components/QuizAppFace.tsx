import React, { useState } from 'react'
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';
import 'animate.css';



const questions = [
    {
      question: "What does HTML stand for?",
      options: [
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Text Markup Language",
        "Hyper Transfer Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Who is making the Web standards?",
      options: [
        "Mozilla",
        "The World Wide Web Consortium",
        "Microsoft",
        "Google"
      ],
      correctAnswer: "The World Wide Web Consortium"
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: [
        "<heading>",
        "<h6>",
        "<head>",
        "<h1>"
      ],
      correctAnswer: "<h1>"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "<br>",
        "<lb>",
        "<break>",
        "<bl>"
      ],
      correctAnswer: "<br>"
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        "<background>yellow</background>",
        "<body style=\"background-color:yellow;\">",
        "<body bg=\"yellow\">",
        "<body background=\"yellow\">"
      ],
      correctAnswer: "<body style=\"background-color:yellow;\">"
    },
    {
      question: "Choose the correct HTML element to define important text",
      options: [
        "<b>",
        "<important>",
        "<strong>",
        "<i>"
      ],
      correctAnswer: "<strong>"
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      options: [
          "<i>",
          "<italic>",
          "<em>",
        "<strong>"
      ],
      correctAnswer: "<em>"
    },
    {
      question: "Which character is used to indicate an end tag?",
      options: [
        "*",
        "/",
        "<",
        "^"
      ],
      correctAnswer: "/"
    },
    {
      question: "How can you make a numbered list?",
      options: [
        "<ul>",
        "<dl>",
        "<ol>",
        "<list>"
      ],
      correctAnswer: "<ol>"
    },
    {
      question: "How can you make a bulleted list?",
      options: [
          "<ol>",
          "<list>",
          "<dl>",
          "<ul>"
      ],
      correctAnswer: "<ul>"
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
          "<a>http://www.example.com</a>",
          "<link>http://www.example.com</link>",
          "<a href=\"http://www.example.com\">Example</a>",
        "<url>http://www.example.com</url>"
      ],
      correctAnswer: "<a href=\"http://www.example.com\">Example</a>"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: [
          "src",
          "alt",
        "longdesc",
        "title"
      ],
      correctAnswer: "alt"
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: [
          "<foot>",
          "<section>",
          "<bottom>",
          "<footer>"
      ],
      correctAnswer: "<footer>"
    },
    {
      question: "What is the correct HTML for creating a text input field?",
      options: [
          "<textinput>",
          "<textfield>",
          "<input type=\"text\">",
        "<input type=\"textfield\">"
      ],
      correctAnswer: "<input type=\"text\">"
    },
    {
      question: "Which HTML element is used to define a table cell?",
      options: [
          "<tr>",
          "<td>",
        "<th>",
        "<table>"
      ],
      correctAnswer: "<td>"
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: [
          "<checkbox>",
          "<input type=\"check\">",
          "<input type=\"checkbox\">",
        "<check>"
      ],
      correctAnswer: "<input type=\"checkbox\">"
    },
    {
      question: "Which HTML element is used to specify a header for a document or section?",
      options: [
          "<head>",
          "<section>",
          "<top>",
          "<header>"
      ],
      correctAnswer: "<header>"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: [
          "styles",
          "class",
          "style",
          "font"
      ],
      correctAnswer: "style"
    },
    {
      question: "How can you open a link in a new tab/browser window?",
      options: [
          "<a href=\"url\" new>",
          "<a href=\"url\" target=\"new\">",
          "<a href=\"url\" target=\"_blank\">",
        "<a href=\"url\" target=\"open\">"
      ],
      correctAnswer: "<a href=\"url\" target=\"_blank\">"
    },
    {
      question: "Which HTML element is used to define a navigation link?",
      options: [
        "<nav>",
        "<a>",
        "<navigate>",
        "<link>"
      ],
      correctAnswer: "<a>"
    }
  ];
  
  
  
  

export default function QuizAppFace() {

    const [index , setIndex] = useState(0);
    const[marks , setMarks] = useState(0);

    const checkAnswer = (a:any , b:any)=>{
        if(a == b){
            setMarks(marks + 1)
            setIndex(index + 1)
        }
        else{
            setIndex(index + 1)
        }

        if(index+1===questions.length){
            Swal.fire({
                imageUrl: "https://i.imgflip.com/1m167s.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                title: `Congratulations! You passed the quiz and your total is ${marks+1} \nPercentage: ${(marks+1)*100/questions.length}%`,
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

        if(index == questions.length && marks>10){
            Swal.fire({
                imageUrl: "https://i.imgflip.com/1m167s.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                title: `Congratulations! You passed the quiz and your total is ${marks} \nPercentage: ${marks*100/questions.length}%`,
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
        if(index+1==questions.length && marks<10){
            Swal.fire({
                imageUrl: "https://i.redd.it/fohpg85pbl851.jpg",
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                title: `Unfortunately, you didn't pass the and your total is ${marks} \nPercentage: ${marks*100/questions.length}%`,
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


    const skipButton = ()=>{
        setIndex(index+1)
        if(index + 1 === questions.length){
            Swal.fire({
                imageUrl: "https://i.redd.it/fohpg85pbl851.jpg",
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                title: `Unfortunately, you didn't pass the and your total is ${marks} \nPercentage: ${marks*100/questions.length}%`,
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
                icon: "warning",
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
    <>
        <h1 id='heading'>HTML QUIZ</h1>
      <div id='container'>
        <p id='questionsLength'>Ques:{index+1}/{questions.length}</p>
        <div id='box'>
        <p>Question({index+1}): {questions[index].question}</p>
        </div>
        <div id='optionBox'>
            {questions[index].options.map((x:any , i:number)=>{
                return <button id='options' onClick={()=>checkAnswer(x ,questions[index].correctAnswer )} key={i}>{x}</button>
            })}
        </div>
        <div id='btnsBox'>
        <button id='backBtn' onClick={backButton}>Back</button>
        <button id='skipBtn' onClick={skipButton}>Skip</button>

        </div>
    </div>
            </>
    
  )
}
