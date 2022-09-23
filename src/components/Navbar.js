import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//MUI stuff
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import LogoutIcon from '@mui/icons-material/Logout';

import logout from "../functions/logout"

import checkLogin from '../functions/checklogin'
import TagFacesIcon from '@mui/icons-material/TagFaces';
//pictures

class Navbar extends Component {
  render() {
    var tstLogoLink = checkLogin() ? '/panel' : '/'
    return (
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="toolbar"
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Grid item>
              {' '}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton aria-label="menu">
                  <MenuIcon sx={{ color: '#fafafa' }} />
                </IconButton>{' '}
                <Link
                  to={tstLogoLink}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{
                      fontWeight: 'regular',
                      mt: 1,
                      mb: 1,
                      mr: 2,
                      ml: 2,
                      fontSize: 23,
                    }}
                  >
                    The Student Thing
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item> </Grid>
            <Grid item>
              {checkLogin() ? (<div>
                <Button
                  variant="Text"
                  sx={{ textTransform: 'none', backgroundColor: "primary.light", mr:1}}
                  component={Link}
                  to="/accsettings"
                  
                ><Grid container diretion="row" justifyContent="flex-end" alignItems="center"><TagFacesIcon/>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mt: 1,
                      mb: 1,
                      mr: 2,
                      ml: 2,
                      fontSize: 19,
                    }}
                  >
                    {localStorage.username}
                  </Typography></Grid>
                </Button>
                  <IconButton aria-label="logout" onClick={logout}>
                  <LogoutIcon sx={{ color: '#fafafa' }} />
                </IconButton></div>
              ) : (
                <Button
                  variant="Text"
                  sx={{ textTransform: 'none' }}
                  component={Link}
                  to="/login"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mt: 1,
                      mb: 1,
                      mr: 2,
                      ml: 2,
                      fontSize: 19,
                    }}
                  >
                    LOGIN
                  </Typography>
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
