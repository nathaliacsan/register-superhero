import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import './styles.scss'
import { HeroesService } from '../../services/HeroesService'

const newHeroeFormSchema = z.object({
  Name: z.string(),
  Active: z.boolean(),
  CategoryId: z.number(),
})

type NewHeroeFormInputs = z.infer<typeof newHeroeFormSchema>

export function NewSuperhero() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewHeroeFormInputs>({
    resolver: zodResolver(newHeroeFormSchema),
  })

  async function handleCreateNewHeroe(data: NewHeroeFormInputs) {
    const { Name, Active, CategoryId } = data
    try {
      await HeroesService.postNew({ Name, Active, CategoryId })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container-base">
      <h1 className="title">Cadastre um novo super-herói</h1>
      <form
        className="box-new-heroe"
        onSubmit={handleSubmit(handleCreateNewHeroe)}
      >
        <input type="text" placeholder="Nome:" {...register('Name')} />
        <input
          type="number"
          placeholder="Id da Categoria:"
          {...register('CategoryId', { valueAsNumber: true })}
        />

        <Controller
          control={control}
          name="Active"
          render={({ field: { onBlur, onChange } }) => {
            return (
              <>
                <div className="box-radio-button">
                  <label>
                    Herói ativo:
                    <input
                      type="radio"
                      {...register('Active')}
                      onBlur={onBlur}
                      onChange={() => onChange(true)}
                    />
                  </label>

                  <label>
                    Herói inativo:
                    <input
                      type="radio"
                      {...register('Active')}
                      onBlur={onBlur}
                      onChange={() => onChange(false)}
                    />
                  </label>
                </div>
              </>
            )
          }}
        />

        <button type="submit" disabled={isSubmitting}>
          Cadastrar
        </button>
      </form>
    </div>
  )
}
