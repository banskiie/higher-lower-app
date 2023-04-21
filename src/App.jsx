import React, { useState, createContext, useCallback } from "react";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

export const AppContext = createContext();

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const playing = useCallback(() => {
    setGameOver((isGameOver) => !isGameOver);
  }, [gameOver]);

  const changeScore = useCallback(
    (score) => {
      setFinalScore(score);
    },
    [finalScore]
  );

  const AppGrp = {
    playing,
    changeScore,
    finalScore,
  };

  return (
    <AppContext.Provider value={AppGrp}>
      {!gameOver ? <Game /> : <GameOver />}
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
