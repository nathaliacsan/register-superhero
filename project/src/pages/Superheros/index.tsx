import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.scss'

import { HeroesContext } from '../../contexts/HeroesContext'
import { Header } from '../../components/Header'

export function Superheros() {
  const navigate = useNavigate()
  const { heroes } = useContext(HeroesContext)

  useEffect(() => {}, [])

  return (
    <div className="container-base">
      <Header title="Super-heróis cadastrados" />

      <div className="box-heroes">
        {heroes.map((heroe) => {
          return (
            <div className="card-heroes" key={heroe.Id}>
              {heroe.Name}
            </div>
          )
        })}
      </div>
      <button
        className="button-submit-heroe"
        onClick={() => navigate('/superheros/add')}
      >
        Adicionar novo super-herói
      </button>
    </div>
  )
}
