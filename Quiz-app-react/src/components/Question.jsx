import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer, activeQuestionIndex }) {
  return (
    <div id="question">
      <QuestionTimer 
        key={activeQuestionIndex}
        timeout={10000} 
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers 
        key={activeQuestionIndex}
        answers={answers}
        selectedAnswer={selectedAnswer} 
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
