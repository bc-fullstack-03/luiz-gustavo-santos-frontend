import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputProps = {
  label?: string
  id?: string
  icon?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ icon, id, label, ...props }) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Wrapper hasIcon={!!icon}>
        {!!icon && icon}
        <S.Input id={id} {...props} />
      </S.Wrapper>
    </S.Container>
  )
}
