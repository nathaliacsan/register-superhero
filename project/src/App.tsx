import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import './styles/global.scss'

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}
