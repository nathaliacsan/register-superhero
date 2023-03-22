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

const postNew = ({ Name, Active, CategoryId }: IAddNewHeroe) => {
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

export const HeroesService = {
  getAll,
  postNew,
}
