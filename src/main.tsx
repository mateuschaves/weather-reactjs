import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/global.ts'
import Home from './pages/Home/index.tsx'

import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from 'styled-components'
import theme from './style/theme.ts'

import 'leaflet/dist/leaflet.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
