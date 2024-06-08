import { useState, useEffect } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../Question.js";

export default function Question({ questionIndex, onSelectAnswer, onSkipAnswer, activeQuestionIndex }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null
  });

  const [timer, setTimer] = useState(10000);

  useEffect(() => {
    if (answer.selectedAnswer) {
      setTimer(1000);
    }

    if (answer.isCorrect !== null) {
      setTimer(2000);
    }
  }, [answer]);

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === selectedAnswer
      });

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
