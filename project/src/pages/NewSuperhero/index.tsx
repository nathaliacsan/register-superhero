import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import './styles.scss'
import { HeroesService } from '../../services/HeroesService'
import { useState } from 'react'

import { capitalizeFirstLetterAllWords } from '../../utils/textFormatter'

import { Header } from '../../components/Header'
const newHeroeFormSchema = z.object({
  Name: z.string(),
  Active: z.boolean(),
  CategoryId: z.number(),
})

type NewHeroeFormInputs = z.infer<typeof newHeroeFormSchema>

export function NewSuperhero() {
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewHeroeFormInputs>({
    resolver: zodResolver(newHeroeFormSchema),
  })

  async function handleCreateNewHeroe(data: NewHeroeFormInputs) {
    const { Active, CategoryId } = data
    const nameFormatter = capitalizeFirstLetterAllWords(data.Name)
    try {
      await HeroesService.postNew({ Name: nameFormatter, Active, CategoryId })
      setSuccessMessage(true)
    } catch (error) {
      setErrorMessage(true)
    }
  }

  return (
    <div className="container-base">
      <Header title="Cadastar super-herói" />
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
        {successMessage && (
          <p className="success-message">Super-herói cadastrado com sucesso</p>
        )}
        {errorMessage && (
          <p className="error-message">
            Não foi possível cadastrar super-herói, tente novamente
          </p>
        )}
      </form>
    </div>
  )
}
