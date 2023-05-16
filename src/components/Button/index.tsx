import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <S.Wrapper disabled={disabled} {...props}>
      {children}
    </S.Wrapper>
  )
}
