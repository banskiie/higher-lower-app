import React from 'react'
import { Box } from '@mui/material'
import impressive from '../../assets/gif/impressive.gif'
import { motion } from 'framer-motion'
import ok from '../../assets/gif/ok.gif'
import sad from '../../assets/gif/sad.gif'

import GameOverBox from './GameOverBox'

function GameOver(props) {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      style={{ height: '100vh' }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          'img': {
            position: 'absolute',
            width: '100vw',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(50%)'
          }
        }}
      >
        <img src={props.finalScore <= 2 ? sad : props.finalScore <= 8 ? ok : impressive} alt="img" />
        <GameOverBox playingAgain={props.playAgain} finalScore={props.finalScore} />
      </Box>
    </motion.div>
  )
}

export default GameOver