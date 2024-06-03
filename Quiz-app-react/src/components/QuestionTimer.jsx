import { useEffect, useState } from "react"

export default function QuestionTimer( {timer} ) {
  const [remainingTime, setRemainingTime] = useState()
  useEffect(() => {
   const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        prevRemainingTime-100;
      } )
    }, 100);
    return () => {
      clearInterval(interval)
    };
  }, [])
  return <progress id="question-time" value={remainingTime} max={timer} />
}