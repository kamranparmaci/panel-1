import React from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import EnhancedTable from '../../components/table'
import Transitions from '../../components/ui/transitions'

const TableScreen = () => {
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
          <Grid item xs={12}>
            <EnhancedTable />
          </Grid>
        </Grid>
      </Container>
    </Transitions>
  )
}

export default TableScreen
