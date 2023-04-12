import React, { useState } from 'react'
import { Button } from '@mui/material'

function PeraWallet() {
  const [connected, setConnected] = useState(false)

  const connectHandler = () => {
    setConnected(isConnected => !isConnected)
  }

  return (
    <Button
      variant='contained'
      onClick={connectHandler}
      sx={{
        marginY: 2,
        backgroundColor: 'transparent',
        boxShadow: 0,
        border: 'solid 1px yellow',
        color: 'yellow',
        font: 'inherit',
        fontWeight: 400,
        fill: 'yellow',
        ':hover': {
          bgcolor: 'yellow',
          color: '#252525',
          border: 'solid 1px yellow',
        }
      }}>{connected ? 'Connected' : 'Connect'}</Button>
  )
}

export default PeraWallet