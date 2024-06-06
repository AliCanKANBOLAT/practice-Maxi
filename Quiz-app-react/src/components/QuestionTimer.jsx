import { useEffect, useState } from "react"


export default function QuestionTimer( {timeout, onTimeout} ) {
  const [remainingTime, setRemainingTime] = useState(timeout)

  useEffect(() => {
    setTimeout(() => {
      onTimeout()
    }, timeout);
  }, [ timeout, onTimeout ])

  useEffect(() => {
    setInterval(() => {
    setRemainingTime(prev => prev-100)
    }, 100);
    
  }, [])


  return(
    <>
    <progress id="question-time" max={timeout} value={remainingTime} />
    </>
  )
}