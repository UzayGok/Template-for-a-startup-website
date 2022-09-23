import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'

import { Link } from 'react-router-dom'

//Images
import I94 from '../images/941.png'
import I95 from '../images/95.png'
import I192 from '../images/192.png'
import I327 from '../images/327.png'
import I26 from '../images/26.png'
import redirect from '../functions/redirect'

export class Home extends Component {
  render() {
    redirect('/panel', true)
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="homepage one"
        >
          <Grid item xs={7}>
          <Typography variant="h6" sx={{ fontWeight: 'normal', mb:2, color:"#444" }}>
              Yes, we know you studied hard. 
              <br/>
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Did you practice though?
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 'bold', color: '#1F9C45' }}
            >
              Get Quizzed. Immediately.
            </Typography>
            <div className="paper">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'regular',

                  mt: 1,
                  color: '#666666',
                  fontSize: 20,
                }}
              >
                You know how you think you studied very well before the exam but then get the weirdest questions from the darkest corners of the material? Well, AI will help you with that.
              </Typography>
            </div>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Link
                to="/signup"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                {' '}
                <Button
                  variant="contained"
                  sx={{ textTransform: 'none', mr: 2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'light',
                      mt: 1,
                      mb: 1,
                      mr: 2,
                      ml: 2,
                      fontSize: 19,
                    }}
                  >
                    Register now
                  </Typography>
                </Button>
              </Link>
              <Link
                to="/more"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                <Button variant="outlined" sx={{ textTransform: 'none' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'light',
                      mt: 1,
                      mb: 1,
                      mr: 2,
                      ml: 2,
                      fontSize: 19,
                    }}
                  >
                    Learn more
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <img src={I94} alt="" />
          </Grid>
        </Grid>
        <div className="homepage2">
          <div className="homepage two">
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 5 }}
              >
                <Grid item xs={3}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={I192} alt="" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" sx={{ color: '#555555' }}>
                        Upload Material
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'regular',
                          textAlign: 'center',
                          mr: 2,
                          ml: 2,
                          mt: 1,
                          color: '#666666',
                          fontSize: 16,
                        }}
                      >
                        Upload the course material files (e.g. PDF) you wish to
                        process.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={I26} alt="" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" sx={{ color: '#555555' }}>
                        Quiz Generation
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'regular',
                          textAlign: 'center',
                          mr: 2,
                          ml: 2,
                          mt: 1,
                          color: '#666666',
                          fontSize: 16,
                        }}
                      >
                        The AI will work on it and generate a quiz that fits the
                        criteria you chose.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={I95} alt="" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" sx={{ color: '#555555' }}>
                        Solve the Quiz
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'regular',
                          textAlign: 'center',
                          mr: 2,
                          ml: 2,
                          mt: 1,
                          color: '#666666',
                          fontSize: 16,
                        }}
                      >
                        Answer the questions and click done after completion.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={I327} alt="" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" sx={{ color: '#555555' }}>
                        Receive the Results
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'regular',
                          textAlign: 'center',
                          mr: 2,
                          ml: 2,
                          mt: 1,
                          color: '#666666',
                          fontSize: 16,
                        }}
                      >
                        The correct answers and your evaluation will be
                        displayed.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>{' '}
        <div className="homepage2">
          <div className="homepage two">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} alignItems="center" justifyContent="center">
                {' '}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    maxWidth: 800,
                    color: '#3a3a3a',
                  }}
                >
                  An extremely powerful tool for students of any department
                </Typography>
              </Grid>
              <Grid item xs={12} alignItems="center" justifyContent="center">
                {' '}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'regular',
                    textAlign: 'center',
                    maxWidth: 1000,
                    color: '#555',
                    mt: 3,
                  }}
                >
                  Test your knowledge and prepare for your exams regardless of
                  your department. The AI will understand anything in almost any
                  language and prepare intelligent questions in the original
                  language. Currently only multiple choice questions are
                  supported.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    )
  }
}

export default Home
