import { Outlet } from 'react-router'

import { Sidebar } from '..'

import * as S from './styles'

export const AppLayout = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
    </S.Wrapper>
  )
}
