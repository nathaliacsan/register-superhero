import { IAddNewHeroe } from '../interfaces'
import { Api } from '../providers'

const accessKey = '394772d23dfb455a9fc5ee31ce8ee53a'

const getAll = () => {
  return Api.get('/Heroes', {
    headers: {
      Accept: 'text/html',
      accessKey,
    },
  })
}

const postNew = ({ Name, Active, CategoryId }: IAddNewHeroe) => {
  return Api.post('/Heroes', {
    Name,
    Active,
    CategoryId,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'text/html',
      accessKey,
    },
  })
}

export const HeroesService = {
  getAll,
  postNew,
}
