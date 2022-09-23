import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//Themes
import { createTheme, ThemeProvider } from '@mui/material/styles'

//Pages
import Home from './pages/Home'
import History from './pages/History'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Panel from './pages/Panel'
import Quiz from './pages/Quiz'
import Payment from './pages/Payment'
import More from './pages/More'
import Accsettings from "./pages/Accsettings"

//Components
import Navbar from './components/Navbar'

const theme = createTheme({
  palette: {
    primary: {
      light: '#34ad34',
      main: '#1F9C45',
      dark: '#1f731f',
      contrastText: '#fbfbfb',
    },
    secondary: {
      light: '#9c660e',
      main: '#784e0a',
      dark: '#5e3e0c',
      contrastText: '#fbfbfb',
    },
  },
})



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/history" element={<History />} />
              <Route path="/panel" element={<Panel />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/more" element={<More />} />
              <Route path="/accsettings" element={<Accsettings />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
