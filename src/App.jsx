import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import GameOver from './components/GameOver/GameOver';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const playing = () => {
    setGameOver(isGameOver => !isGameOver);
  }

  const changeScore = score => {
    setFinalScore(score);
  }

  return (
    <>
      {!gameOver ? <Game lost={playing} getNewFinalScore={changeScore} /> : <GameOver playAgain={playing} finalScore={finalScore} />}
      <Footer />
    </>
  )
}

export default App
