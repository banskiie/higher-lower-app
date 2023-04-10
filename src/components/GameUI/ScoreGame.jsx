import React, { useState } from 'react'
import { Button, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function ScoreGame(props) {
  const [score, setScore] = useState(0)

  const addScore = () => {
    setTimeout(() => {
      setScore(prevScore => prevScore + 1)
    }, 2000)
    props.detected()
  }

  const gameOver = () => {
    props.getScore(score)
    props.lost()
    setTimeout(() => {
      setScore(0)
    }, 2000)
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant='p' sx={{ font: 'inherit', fontSize: 32, fontWeight: 800, marginY: 5 }}>Score: {score}</Typography>
      <Button
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