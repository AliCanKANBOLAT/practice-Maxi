//GameBoard.jsx
import { useState } from "react"

const initalGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initalGameBoard)

  function handleSelectSquare( rowIndex, colIndex ) {
    setGameBoard((prevGameBoardCondition => {
      const updatedBoard = [...prevGameBoardCondition.map(innerArray => [...innerArray])]
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard
    }))
    onSelectSquare()
  }

  return(
    <>
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}> 
      <ol>
        {row.map((playerSymbol, colIndex) => <button onClick={() => handleSelectSquare(rowIndex,colIndex)} key={colIndex}> {playerSymbol} </button> ) }
      </ol>
      </li> )}


    </ol>
    </>
  )
}

