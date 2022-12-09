import { ArrowBackIos } from '@mui/icons-material'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BarCharts from '../../components/chart'
import Transitions from '../../components/ui/transitions'

const ChartScren = () => {
  const navigate = useNavigate()
  return (
    <Transitions type="fade" in>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              sx={{ alignItems: 'center', cursor: 'pointer', width: '85px' }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIos sx={{ color: 'gray' }} />
              <Typography variant="h5" sx={{ color: 'grey' }}>
                Back
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ height: '80vh' }}>
            <BarCharts />
          </Grid>
        </Grid>
      </Container>
    </Transitions>
  )
}

export default ChartScren
