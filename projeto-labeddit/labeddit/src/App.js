import React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/theme"
import Router from "./Router/Router"

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App