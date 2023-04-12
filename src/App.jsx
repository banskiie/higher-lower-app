import React, { useState, createContext } from 'react'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import GameOver from './components/GameOver/GameOver'

export const AppContext = createContext()

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  function playing() {
    setGameOver(isGameOver => !isGameOver)
  }

  function changeScore(score) {
    setFinalScore(score)
  }

  const AppGrp = {
    playing,
    changeScore,
    finalScore
  }

  return (
    <AppContext.Provider value={AppGrp}>
      {!gameOver ? <Game /> : <GameOver />}
      <Footer />
    </AppContext.Provider>
  )
}

export default App
