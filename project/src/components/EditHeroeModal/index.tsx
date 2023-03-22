import * as Dialog from '@radix-ui/react-dialog'
import { IHeroes } from '../../interfaces'
import { HeroesService } from '../../services/HeroesService'

import './styles.scss'

export function EditHeroeModal({ Name, Active, Id }: IHeroes) {
  async function handleDeleteHero(Id: number) {
    try {
      await HeroesService.deleteHero(Id)
    } catch (error) {}
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />
      <Dialog.Content className="dialog-content">
        <Dialog.Title className="title-hero">{Name}</Dialog.Title>
        {Active === true ? (
          <p className="active">Herói ativo</p>
        ) : (
          <p className="inactive">Herói inativo</p>
        )}
        <button onClick={() => handleDeleteHero(Id)}>Deletar herói</button>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
