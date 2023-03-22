import { IAddNewHeroe } from '../interfaces'
import { Api } from '../providers'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'text/html',
  accessKey: '394772d23dfb455a9fc5ee31ce8ee53a',
}

const getAll = () => {
  return Api.get('/Heroes', {
    headers,
  })
}

const post = ({ Name, Active, CategoryId }: IAddNewHeroe) => {
  return Api.post(
    '/Heroes',
    {
      Name,
      Active,
      CategoryId,
    },
    {
      headers,
    },
  )
}

const deleteHero = (Id: number) => {
  return Api.delete(`/Heroes/${Id}`, { headers })
}

export const HeroesService = {
  getAll,
  post,
  deleteHero,
}
