import { createContext, ReactNode, useEffect, useState } from 'react'
import { IHeroes } from '../interfaces'
import { HeroesService } from '../services/HeroesService'

interface HeroesContextType {
  heroes: IHeroes[]
}

interface HeroesProviderProps {
  children: ReactNode
}

export const HeroesContext = createContext({} as HeroesContextType)

export function HeroesProvider({ children }: HeroesProviderProps) {
  const [heroes, setHeroes] = useState<IHeroes[]>([])

  async function getAllHeroes() {
    const { status, data } = await HeroesService.getAll()

    if (status !== 200) throw new Error()
    setHeroes(data)
  }

  useEffect(() => {
    getAllHeroes()
  }, [])

  return (
    <HeroesContext.Provider value={{ heroes }}>
      {children}
    </HeroesContext.Provider>
  )
}
