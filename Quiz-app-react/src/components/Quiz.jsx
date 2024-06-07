import { useState, useCallback } from "react"
import QUESTIONS from "../Question.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx"

export default function Quiz () {
  const [answerState, setAnswerState] = useState("")
  const [userAnswer, setUserAnswer] = useState([])

  const activeQuestionIndex = 
  answerState === "" ? userAnswer.length : userAnswer.length-1;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

   const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer) {
    setAnswerState("answered")
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer]
    } )

    setTimeout(() => {
      if(selectedAnswer ===  QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct")
      } else {
        setAnswerState("wrong")
      }
      setTimeout(() => {
        setAnswerState(" ")
      },2000)

    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

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
        <QuestionTimer 
        key={activeQuestionIndex}
        timeout={10000} 
        onTimeout={handleSkipAnswer} />
      <h2> {QUESTIONS[activeQuestionIndex].text } </h2>
      <ul id="answer">
        { shuffledAnswers.map(answer => {
          const isSelected = userAnswer[userAnswer.length-1] === answer;
          let cssClass = "";

          if(answerState === "answered" &&  isSelected){
            cssClass = "selected"
          }

          if ((answerState === "correct"  || answerState === "wrong" ) && isSelected ) {
            cssClass = answerState;
          }
          return (<li key={answer} className="answer">
          <button 
          className={cssClass} 
          onClick={() => handleSelectAnswer(answer)}> 
          {answer} 
          </button>
        </li>
        )
        }
        ) }
      </ul>
      </div>
    </div>
  )
}