import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { hot } from 'react-hot-loader'
import io from "socket.io-client"
import auth from './auth/auth-helper'
import theme from './theme'
const App = () => {
 return (
 <BrowserRouter>
 <ThemeProvider theme={theme}>
 <MainRouter />
 </ThemeProvider>
 </BrowserRouter>
)}
export default hot(module)(App)