import { useState } from "react"
import QUESTIONS from "../Question.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx"

export default function Quiz () {
  const [userAnswer, setUserAnswer] = useState([])

  const activeQuestionIndex = userAnswer.length
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer]
    } )
  }
  if(quizIsComplete) {
    return <div id="summary">
      <img src= {quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed </h2>
    </div>
  }
  const shuffledAnswers = [... QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5 );

  return(
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
      <h2> {QUESTIONS[activeQuestionIndex].text } </h2>
      <ul id="answer">
        { shuffledAnswers.map(answer => (
        <li key={answer} className="answer">
          <button onClick={() => handleSelectAnswer(answer)}> {answer} </button>
        </li>
        )) }
      </ul>
      </div>
    </div>
  )
}