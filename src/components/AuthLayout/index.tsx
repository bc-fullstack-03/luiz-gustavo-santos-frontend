import { Link, Outlet, useLocation } from 'react-router-dom'

import logo from '@/assets/logo-parrot.svg'

import * as S from './styles'

export const AuthLayout = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <img src={logo} alt="Logo" />
      <S.Title>Sysmap Parrot</S.Title>
      <S.Text>Faça login e comece a usar!</S.Text>
      <Outlet />
      {pathname === '/' ? (
        <Link to="/signup">
          <span>Não possui uma conta? Crie uma agora!</span>
        </Link>
      ) : (
        <Link to="/">
          <span>Já possui uma conta? Faça login!</span>
        </Link>
      )}
    </S.Container>
  )
}
