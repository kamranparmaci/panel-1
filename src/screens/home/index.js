import { Container, Grid } from '@mui/material'
import React from 'react'
import BGBox from '../../components/ui/bg-box'
import Transitions from '../../components/ui/transitions'

const Home = () => {
  return (
    <Transitions type="fade" in>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          margin: 0,
          padding: 0,
          height: '100vh',
          background: 'black',
        }}
      >
        <Grid container>
          <Grid item sm={6} xs={12}>
            <BGBox text="TABLE" path="table" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BGBox text="CHART" path="chart" />
          </Grid>
        </Grid>
      </Container>
    </Transitions>
  )
}

export default Home
