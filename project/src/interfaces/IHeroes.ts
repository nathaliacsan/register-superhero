export interface IHeroes {
  Id: number
  Name: string
  CategoryId?: number
  Active: boolean
  Category?: string
}

export interface IAddNewHeroe {
  Name: string
  CategoryId: number
  Active: boolean
}
