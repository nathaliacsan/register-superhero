import './styles.scss'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <button className="home" onClick={() => navigate('/superheros')}>
        Cadastrar super-herói
      </button>
      <button className="home" disabled>
        Cadastrar categoria
      </button>
    </div>
  )
}
