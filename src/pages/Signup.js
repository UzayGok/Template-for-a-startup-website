import { Typography } from '@mui/material'
import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Link } from 'react-router-dom'

import axios from 'axios'
import redirect from '../functions/redirect'

export class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password2: '',
      firstname: '',
      lastname: '',
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
      password2: this.state.password2,
      email: this.state.email,
      first_name: this.state.firstname,
      last_name: this.state.lastname,
    }
    axios
      .post('/register/', userData)
      .then((res) => {
        this.setState({
          loading: false,
        })
        window.location.replace('/login')
      })
      .catch((err) => {
        console.log(err.response.data)
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
    redirect("/panel", true)
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
              Register
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={6}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    label="First name (optional)"
                    sx={{ mb: 2 }}
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    error={
                      this.state.errors.first_name || this.state.errors.detail
                    }
                    helperText={this.state.errors.first_name}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    label="Last name (optional)"
                    sx={{ mb: 2 }}
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    error={
                      this.state.errors.last_name || this.state.errors.detail
                    }
                    helperText={this.state.errors.last_name}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email*"
                sx={{ mb: 2 }}
                value={this.state.email}
                onChange={this.handleChange}
                error={this.state.errors.email || this.state.errors.detail}
                helperText={this.state.errors.email}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password*"
                sx={{ mb: 2 }}
                value={this.state.password}
                onChange={this.handleChange}
                error={this.state.errors.password || this.state.errors.detail}
                helperText={this.state.errors.password}
                fullWidth
              />
              <TextField
                id="password2"
                name="password2"
                type="password"
                label="Confirm Password*"
                value={this.state.password2}
                onChange={this.handleChange}
                error={this.state.errors.password2 || this.state.errors.detail}
                helperText={this.state.errors.password2}
                fullWidth
              />{' '}
              {this.state.errors.detail ? (
                <Grid item xs={12}>
                  <Typography variant="h8" sx={{ mt: 3, color: '#E55' }}>
                    {this.state.errors.detail}
                  </Typography>
                </Grid>
              ) : null}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, position: 'relative' }}
                disabled={this.state.loading}
              >
                Register
                {this.state.loading && (
                  <CircularProgress
                    sx={{ position: 'absolute' }}
                  ></CircularProgress>
                )}
              </Button>
            </form>
            <Grid item sx={{ mt: 3 }}>
              <Link to="/login">
                <small>Already have an account? Click here to log in.</small>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

export default Signup
