import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import DragDropFile from '../components/DragDropFile'
import redirect from '../functions/redirect'
import Typography from '@mui/material/Typography'

export class Quiz extends Component {
  constructor() {
    redirect('/', false)
    super()
    this.state = {
      stage: 1,
      files: [],
    }
  }

  callbackFunction = (childData) => {
    this.setState({ files: childData, stage:2 })
    console.log(childData)
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="quiz"
      > <Typography variant="h5" sx={{color:"#555", mb:3}}>Upload the material you wish to get tested on:</Typography>
        <DragDropFile parentCallback={this.callbackFunction} />
      </Grid>
    )
  }
}

export default Quiz


