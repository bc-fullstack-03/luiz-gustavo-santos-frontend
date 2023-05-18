import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignOut } from '@phosphor-icons/react'

import { signOut } from '@/services/auth'

import * as S from './styles'

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate()

  const handleSignOut = useCallback(() => {
    signOut()
    navigate('/')
  }, [navigate])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Button onClick={handleSignOut}>
        <SignOut size={24} weight="fill" />
      </S.Button>
    </S.Wrapper>
  )
}
