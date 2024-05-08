import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const inputRef = useRef(null)

  const [enteredPlayerName, setEnteredPlayerName] = useState('')
  
  
  function handleClick() {
    setEnteredPlayerName(inputRef.current.value)
    
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'to the Guest who has not declared their name yet...'}</h2>
      <p>
        <input type="text" 
          ref={inputRef}/>
        <button  
        onClick={handleClick}
        >Set Name
        </button>
      </p>
    </section>
  );
}
