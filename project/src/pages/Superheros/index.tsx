import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeroesContext } from '../../contexts/HeroesContext'
import { Header } from '../../components/Header'
import { EditHeroeModal } from '../../components/EditHeroeModal'

import * as Dialog from '@radix-ui/react-dialog'

import './styles.scss'

export function Superheros() {
  const navigate = useNavigate()
  const { heroes } = useContext(HeroesContext)

  return (
    <div className="container-base">
      <Header title="Super-heróis cadastrados" />

      <div className="box-heroes">
        {heroes.map((heroe) => {
          return (
            <Dialog.Root key={heroe.Id}>
              <Dialog.Trigger asChild>
                <div className="card-heroes">{heroe.Name}</div>
              </Dialog.Trigger>
              <EditHeroeModal
                Name={heroe.Name}
                Active={heroe.Active}
                Id={heroe.Id}
              />
            </Dialog.Root>
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
