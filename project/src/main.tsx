import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HeroesProvider } from './contexts/HeroesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroesProvider>
      <App />
    </HeroesProvider>
  </React.StrictMode>,
)
