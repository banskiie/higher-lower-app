import React, { useState, useEffect } from 'react'
import { Avatar, Typography, Box } from '@mui/material'
import CountUp from "react-countup";
import { motion } from 'framer-motion';

function GameCard(props) {
  const [value, setValue] = useState(props.value)

  useEffect(() => { if (props.reveal) { setValue(props.item.value) } else if (!props.reveal) { setValue(props.value) } }, [props])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
      <Avatar
        src={props.image}
        sx={{ width: 350, height: 350, marginBottom: 3 }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 900,
          fontSize: 32
        }}>
        {props.name}</Typography>
      <Typography
        variant="p"
        sx={{
          fontSize: 16,
          fontWeight: 100,
          marginBottom: 3,
        }}>
        {props.handle}</Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: 100,
          fontWeight: 900,
        }}>
        {value === '?' ? value :
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <CountUp delay={0.4} duration={0.6} className="counter" end={value} />{value !== '?' ? 'm' : ''}
          </motion.div>
        }
      </Typography>
    </Box>
  )
}

export default GameCard