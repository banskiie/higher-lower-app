import React, { useState, useContext } from 'react'
import { Button, Box, Typography } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import { AppContext } from '../../App'
import { GameContext } from '../Game/Game'

function ScoreGame(props) {
  const AppGrp = useContext(AppContext)
  const GameGrp = useContext(GameContext)
  const [score, setScore] = useState(0)

  function addScore() {
    setTimeout(() => {
      setScore(prevScore => prevScore + 1)
    }, 2000)
    GameGrp.newValues()
  }

  function gameOver() {
    AppGrp.changeScore(score)
    GameGrp.lost()
    setTimeout(() => {
      setScore(0)
    }, 2000)
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant='p' sx={{ font: 'inherit', fontSize: 32, fontWeight: 800, marginY: 5, userSelect: 'none' }}>Score: {score}</Typography>
      <Button
        endIcon={<ThumbUpOffAltIcon />}
        variant='contained'
        onClick={props.item1 <= props.item2 ? addScore : gameOver}
        sx={{
          font: 'inherit',
          fontSize: 32,
          width: 340,
          marginY: 1.5,
          paddingY: 2,
          borderRadius: 4,
          boxShadow: 0,
          border: 'none',
          bgcolor: '#58ab53',
          color: 'whitesmoke',
          ':hover': {
            boxShadow: 0,
            bgcolor: 'green'
          }
        }}>Higher</Button>
      <Button
        endIcon={<ThumbDownOffAltIcon sx={{ marginLeft: 1 }} />}
        variant='contained'
        onClick={props.item1 >= props.item2 ? addScore : gameOver}
        sx={{
          font: 'inherit',
          fontSize: 32,
          width: 340,
          marginY: 1.5,
          paddingY: 2,
          borderRadius: 4,
          boxShadow: 0,
          border: 'none',
          bgcolor: '#c65453',
          ':hover': {
            boxShadow: 0,
            bgcolor: 'maroon'
          }
        }}>Lower</Button>
    </Box>
  )
}

export default ScoreGame