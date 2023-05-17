import { Outlet } from 'react-router'

import { Sidebar } from '..'

import * as S from './styles'

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
    </S.Wrapper>
  )
}
