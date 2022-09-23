import './Drag.css'
import React from 'react'
import '../functions/parsepdf'

import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
// drag drop file component
export default function DragDropFile(props) {
  function sendData()  {
    setLoading(true)
    props.parentCallback(filesdone)
    setLoading(false)
  }

  // drag state
  const [dragActive, setDragActive] = React.useState(false)
  const [filesdone, setfilesdone] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [empty, setEmpty] = React.useState(true)

  // ref
  const inputRef = React.useRef(null)

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleFiles = function (files) {
    setfilesdone(filesdone.concat(files))  
    setEmpty(false)
  }

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    var files = [...e.dataTransfer.files]
    var filesflt = files.filter(function (value, index, arr) {
      return value.type === 'application/pdf'
    })
    if (filesflt && filesflt[0]) {
      handleFiles(filesflt)
    }
  }

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault()

    var files = [...e.target.files]
    var filesflt = files.filter(function (value, index, arr) {
      return value.type === 'application/pdf'
    })
    if (filesflt && filesflt[0]) {
      handleFiles(filesflt)
    }
  }

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click()
  }

  const handleRemove = (event) => {
   
    var files = filesdone.filter(function (value, index, arr) {
      return value.name !== event.target.id
    })

    setfilesdone(files)
    if(!files || !files[0] || files.length===0){
      setEmpty(true)
    }
  }
  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? 'drag-active' : ''}
      >
        <div>
          <p><Typography sx={{color:"#333", fontWeight:"light", fontSize:18}}>Drag and drop your .pdf files here or</Typography></p>
          <button className="upload-button" onClick={onButtonClick}>
            <u><Typography sx={{color:"#333", fontSize:18}}>Click to choose</Typography></u>
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
      
  
      <br/>
      {filesdone &&
        filesdone[0] &&
        filesdone.map((file) => (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography variant="h5">{file.name}</Typography>
            <IconButton
              id={file.name}
              onClick={handleRemove}
              sx={{ color: '#A33', ml: 1, width: 30, height: 30 }}
            >
              -
            </IconButton>{' '}
          </Grid>
        ))}
        <Button type="submit" variant="contained" onClick={sendData} disabled={empty || loading} sx={{mt:4}}>
          Upload
        </Button>
    </form>
  )
}

