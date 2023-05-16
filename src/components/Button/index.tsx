import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}
