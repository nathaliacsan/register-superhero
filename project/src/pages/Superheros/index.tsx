import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.scss'

import { HeroesContext } from '../../contexts/HeroesContext'

export function Superheros() {
  const navigate = useNavigate()
  const { heroes } = useContext(HeroesContext)

  useEffect(() => {}, [])

  return (
    <div className="container-base">
      <h1 className="title">Super-heróis cadastrados</h1>

      <div className="box-heroes">
        {heroes.map((heroe) => {
          return (
            <div className="card-heroes" key={heroe.Id}>
              {heroe.Name}
            </div>
          )
        })}
      </div>
      <button onClick={() => navigate('/superheros/add')}>
        Adicionar novo super-herói
      </button>
    </div>
  )
}
