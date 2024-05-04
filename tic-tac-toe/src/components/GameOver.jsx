//GameOver.jsx
export default function GameOver ( {winner, onRestart} ) {
  return(
    <div id="game-over">
      <h2>Spiel vorbei ! </h2>
     {winner && <p> {winner} Gewonnen </p>}
     {!winner && <p> Das Spiel endete unentschieden  </p>}
      <p>
        <button onClick={onRestart}> Rückspiel! </button>
      </p>
    </div>
  )
}