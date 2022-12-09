import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BGBox = ({ text, path }) => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: { sm: '100vh', xs: '50vh' },
        transform: 'scale(0.85)',
        '&:hover': { transform: 'scale(1)', bgcolor: '#0f0f0f' },
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      onClick={() => navigate(path)}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          backgroundImage:
            '-webkit-linear-gradient(0deg, #2c2e2c 0%, #ffffff 100%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default BGBox
