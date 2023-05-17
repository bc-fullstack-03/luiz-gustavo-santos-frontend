import { NavLink } from 'react-router-dom'
import { House, User, Users } from '@phosphor-icons/react'

import logo from '@/assets/logo-white.svg'

import * as S from './styles'
import { Button } from '..'

export const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.BoxLogo>
        <img src={logo} alt="Logo" />
        <S.Text>Parrot</S.Text>
      </S.BoxLogo>
      <S.Menu>
        <NavLink to="/app/feed">
          <House weight="fill" size={32} />
          <S.Text>Página Inicial</S.Text>
        </NavLink>
        <NavLink to="/app/profile">
          <User weight="fill" size={32} />
          <S.Text>Perfil</S.Text>
        </NavLink>
        <NavLink to="/app/friends">
          <Users weight="fill" size={32} />
          <S.Text>Amigos</S.Text>
        </NavLink>
      </S.Menu>
      <Button>Novo Post</Button>
    </S.Wrapper>
  )
}
