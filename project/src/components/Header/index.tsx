import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'phosphor-react'

import './styles.scss'

interface ITitle {
  title: string
}
export function Header({ title }: ITitle) {
  const navigate = useNavigate()

  return (
    <div className="container-header">
      <ArrowLeft size={32} weight="bold" onClick={() => navigate(-1)} />
      <h1 className="title">{title}</h1>
    </div>
  )
}
