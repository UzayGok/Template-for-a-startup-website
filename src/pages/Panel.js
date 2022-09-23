import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import redirect from '../functions/redirect'


export class Panel extends Component {
  render() {
    redirect("/", false)
    return (
      <div className="panel">
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Welcome Back,{' '}
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', color: '#1F9C45' }}
          >
          {localStorage.firstname+" "+localStorage.lastname}
          </Typography>
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
            sx={{ mt: 4 , width: 1200 }}
          >
            <Grid item justifyContent="center">
              <Paper
                elevation={6}
                sx={{ minHeight: 300, width: 400, backgroundColor: '#fcfcfc' }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                  sx={{ height: 300 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography
                      variant="h4"
                      sx={{ mt: 1, ml: 2, color: '#777' }}
                    >
                      All Time
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-end"
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: '#1F9C45',
                        fontWeight: 'bold',
                      }}
                    >
                      89
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{ mr: 2, ml: 2, color: '#aaa', fontWeight: 'bold' }}
                    >
                      /
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: '#555', fontWeight: 'bold' }}
                    >
                      100
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      variant="h5"
                      sx={{ mu: 2, mr: 1, color: '#666', textAlign: 'right' }}
                    >
                      questions answered correctly.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item justifyContent="center">
              <Paper
                elevation={6}
                sx={{ minHeight: 300, width: 400, backgroundColor: '#fcfcfc' }}
              >
                a
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
            sx={{ mt: 5, width: 1200 }}
          >
            <Grid item justifyContent="center">
              <Paper
                elevation={6}
                sx={{ minHeight: 300, width: 400, backgroundColor: '#fcfcfc' }}
              >
                a
              </Paper>
            </Grid>
            <Grid item justifyContent="center">
              <Paper
                elevation={6}
                sx={{ minHeight: 300, width: 400, backgroundColor: '#fcfcfc' }}
              >
                <Button variant="contained" onClick={() => {window.location.replace("/quiz")}}><Typography variant="h4">Get quizzed now</Typography></Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Panel
