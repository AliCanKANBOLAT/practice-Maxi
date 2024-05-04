//player.jsx
import { useState } from "react"
export default function Player({initialName,symbol, isActive, onChangeName}) {
const [ playerName, setPlayerName] = useState(initialName)
const [isEditing, setIsEditing] = useState(false);


function handleEditClick() {
  setIsEditing(prev=>!prev)
  if(isEditing) {
    onChangeName(symbol, playerName)
  }

}
function handleChange (event) {
  const enteredName = event.target.value;
  setPlayerName(enteredName)
}
return(
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
    {isEditing ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name"> {playerName} </span>}
    <span className="player-symbol">{symbol} </span>
    </span>
    <button onClick={handleEditClick}> {isEditing ? "Speichern" : "Name eingeben"} </button>
    </li>
 
)
}