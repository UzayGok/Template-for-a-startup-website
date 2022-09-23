import React, { Component } from 'react'
import redirect from '../functions/redirect'


export class Accsettings extends Component {
  render() {
    redirect("/", false)
    return (
      <div>Accsettings</div>
    )
  }
}

export default Accsettings