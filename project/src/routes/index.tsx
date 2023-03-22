import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewSuperhero } from '../pages/NewSuperhero'
import { Superheros } from '../pages/Superheros'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/superheros" element={<Superheros />} />
      <Route path="/superheros/add" element={<NewSuperhero />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
