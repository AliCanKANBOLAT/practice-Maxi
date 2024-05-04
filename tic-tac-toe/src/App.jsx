//App.jsx
import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log";
function App() {

 const [gameTurns, setGameTurns] = useState([])  
const [activePlayer, setActivePlayer] = useState('X');  
function handleSelectSquare () {
  setActivePlayer((prev) => prev==='X' ? 'O' : 'X')
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Spieler 1" symbol="X" isActive={activePlayer==='X'} />
          <Player initialName="Spieler 2" symbol="O" isActive={activePlayer==='O'}/>

        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
