import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'
import redirect from '../functions/redirect'

import setUser from '../functions/setuser'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {},
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
      errors: {},
    })
    const userData = {
      username: this.state.email,
      password: this.state.password,
    }
    axios
      .post('/login/', userData)
      .then((res) => {
        localStorage.setItem('access', res.data.access)
        localStorage.setItem('refresh', res.data.refresh)
        setUser(res.data.access, res.data.refresh)
        this.setState({
          loading: false,
        })
        window.location.replace('/panel')
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        })
      })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    redirect('/panel', true)
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm className="form">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              The Student Thing
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Login
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="standard"
                sx={{ mb: 2 }}
                value={this.state.email}
                onChange={this.handleChange}
                error={this.state.errors.username || this.state.errors.detail}
                helperText={this.state.errors.username}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="standard"
                sx={{ mb: 2 }}
                value={this.state.password}
                onChange={this.handleChange}
                error={this.state.errors.password || this.state.errors.detail}
                helperText={this.state.errors.password}
                fullWidth
              />{' '}
              {this.state.errors.detail ? (
                <Grid item xs={12}>
                  <Typography variant="h8" sx={{ mt: 3, color: '#E55' }}>
                    {this.state.errors.detail}
                  </Typography>
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, position: 'relative' }}
                  disabled={this.state.loading}
                >
                  Login
                  {this.state.loading && (
                    <CircularProgress
                      sx={{ position: 'absolute' }}
                    ></CircularProgress>
                  )}
                </Button>
              </Grid>
            </form>
            <Grid item sx={{ mt: 3 }}>
              <Link to="/signup">
                <small>No account yet? Register now.</small>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

export default Login
